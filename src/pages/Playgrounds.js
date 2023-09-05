import { useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/playgrounds/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { goToTop } from '../components/mock-data/data';
import { Footer } from '../components/Footer/Footer';

export const Playgrounds = () => {

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Детски площадки и кътове'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
