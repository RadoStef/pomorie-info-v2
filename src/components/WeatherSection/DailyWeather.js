import React, { useState, useEffect } from 'react';
import { Weather } from './Weather';
import { HomepageSectionsCard } from '../UI/HomepageSectionsCard';

export const DailyWeather = () => {
  const [weather, setWeather] = useState({
    temperature_2m_max: [],
    temperature_2m_min: [],
    time: [],
    weathercode: [],
  });
  const latitude = 42.56326;
  const longitude = 27.62986;
  const timezone = 'Europe/Sofia';

  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();
        if (typeof weatherData.daily === 'object') {
          setWeather(weatherData.daily);
        } else {
          throw new Error('Invalid API response - daily data is not an object');
        }
      } catch (error) {
        throw new Error('Error fetching weather data:', 'Error code ' + error);
      }
    }
    fetchWeather();
  }, []);

  return (
    <HomepageSectionsCard>
      <Weather weather={weather} />
    </HomepageSectionsCard>
  );
};
