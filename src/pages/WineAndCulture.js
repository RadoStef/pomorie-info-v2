import { useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/wineandculture/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { goToTop } from '../components/mock-data/data';
import { Footer } from '../components/Footer/Footer';

export const WineAndCulture = () => {

  useEffect(() => {
    goToTop();
  }, [])

  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Култура'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};