import { useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { CityObject } from '../components/photographers/CityObject';
import { PhotographerCard } from '../components/photographers/PhotographerCard';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Footer } from '../components/Footer/Footer';
import { goToTop } from '../components/mock-data/data';

export const BeautifulPomorie = () => {

  useEffect(() => {
    goToTop();
  }, [])

  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Красотата на Поморие'/>
      <CityObject/>
      <PhotographerCard/>
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
};
