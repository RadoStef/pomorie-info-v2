import { useEffect } from 'react';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ParkingsXtras } from '../../components/ObjectXtrasSection/ParkingsXtras';
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from '../../components/UI/PreviousObject';
import blueZone1 from '../../assets/parkings/shortTermZone/shortTermZone1.jpg';
import blueZone2 from '../../assets/parkings/shortTermZone/shortTermZone2.jpg';
import blueZone3 from '../../assets/parkings/shortTermZone/shortTermZone3.jpg';
import blueZone4 from '../../assets/parkings/shortTermZone/shortTermZone4.jpg';
import blueZone5 from '../../assets/parkings/shortTermZone/shorttermZone14.jpg';
import blueZone6 from '../../assets/parkings/shortTermZone/shorttermZone5.jpg';
import blueZone7 from '../../assets/parkings/shortTermZone/shorttermZone6.jpg';
import blueZone8 from '../../assets/parkings/shortTermZone/shorttermZone7.jpg';
import blueZone9 from '../../assets/parkings/shortTermZone/shorttermZone8.jpg';
import blueZone10 from '../../assets/parkings/shortTermZone/shorttermZone9.jpg';
import blueZone11 from '../../assets/parkings/shortTermZone/shorttermZone10.jpg';
import blueZone12 from '../../assets/parkings/shortTermZone/shorttermZone11.jpg';
import blueZone13 from '../../assets/parkings/shortTermZone/shorttermZone12.jpg';
import blueZone14 from '../../assets/parkings/shortTermZone/shorttermZone13.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';


const images = [blueZone1, blueZone9, blueZone7, blueZone13, blueZone6, blueZone8, blueZone10, blueZone11, blueZone12, blueZone14, blueZone2, blueZone3, blueZone4, blueZone5];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5646399,27.6403811&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBlueZone = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[4].name;
  const objectDescription = parkingsData[4].description;
  const parkingXtras = parkingsData.slice(4, 5);

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={parkingXtras}/>
            <Link to='/buffer-stgeorge'><PreviousObject/></Link>
            <Link to='/parking-municipality'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
