import { useEffect } from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/parkings/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { goToTop } from '../components/mock-data/data';
import { Footer } from '../components/Footer/Footer';
import { ParkingsIframe } from '../components/ParkingsIframeSection/ParkingsIframe';
import { MoreAboutParkings } from '../components/ParkingsIframeSection/MoreAboutParkings';

export const Parking = () => {

  useEffect(() => {
    goToTop();
  }, [])

  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Паркинги'/>
      <ParkingsIframe/>
      <MoreAboutParkings/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
