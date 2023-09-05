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
import { PreviousObject } from '../../components/UI/PreviousObject';
import { NextObject } from '../../components/UI/NextObject';
import sopharma1 from '../../assets/parkings/parkingSopharma/sopharmaEntrance.jpg';
import sopharma2 from '../../assets/parkings/parkingSopharma/sopharma1.jpg';
import sopharma3 from '../../assets/parkings/parkingSopharma/sopharma2.jpg';
import sopharma4 from '../../assets/parkings/parkingSopharma/sopharma3.jpg';
import sopharma5 from '../../assets/parkings/parkingSopharma/sopharma4.jpg';
import sopharma6 from '../../assets/parkings/parkingSopharma/sopharma5.jpg';
import sopharma7 from '../../assets/parkings/parkingSopharma/sopharma6.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [sopharma1, sopharma2, sopharma3, sopharma4, sopharma5, sopharma6, sopharma7];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5600572,27.6443619&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingSopharma = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[12].name;
  const objectDescription = parkingsData[12].description;
  const parkingXtras = parkingsData.slice(12, 13);

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
            <Link to='/parking-casino'><PreviousObject/></Link>
            <Link to='/parking-tuthon'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
