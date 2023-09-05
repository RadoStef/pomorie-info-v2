import { Day } from './Day';
import './Weather.css';

export const Weather = ({weather}) => {
    const {temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes} = weather;
  return (
    <div className='weather-wrapper'>
      <h2>☀️ времето - 7 дни </h2>
      <ul>
        {dates.map((date, i) => (
        <Day 
          date={date} 
          max={max.at(i)} 
          min={min.at(i)} 
          code={codes.at(i)} 
          key={date}
          isToday={i === 0}
        />))
        }
      </ul>
    </div>
  )
};
