import { useState, useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { WelcomeSection } from '../components/WelcomeSection/WelcomeSection';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { WeatherInfo } from '../components/WeatherSection/WeatherInfo';
import { Categories } from '../components/CategoriesSection/Categories';
import { Loading } from '../components/UI/Loading/Loading';
import { FAQ } from '../components/QuestionSection/FAQ';
import { ImageListElement } from '../components/ImageLists/ImageListElement';
import { LightboxElement } from '../components/LightBoxSection/LightboxElement';
import { Footer } from '../components/Footer/Footer';
import { WelcomeText } from '../components/WelcomeSection/WelcomeText';
import { DailyWeather } from '../components/WeatherSection/DailyWeather';

export const RootLayout = () => {
  const title = `Информационен туристически портал на град Поморие.`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = title;
    setTimeout(() => setIsLoading(false), 500);
  }, [title]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <AppHeaderBar />
          <WeatherInfo />
          <WelcomeSection />
          <WelcomeText />
          <DailyWeather />
          <Categories />
          <FAQ />
          <ImageListElement />
          <LightboxElement />
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
};
