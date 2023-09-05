import { useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/attractions/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';
import { goToTop } from '../components/mock-data/data';

export const Attractions = () => {

  useEffect(() => {
    goToTop();
  }, [])

  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Атракциони'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
