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
import bufferKapka1 from '../../assets/parkings/bufferKapka/bufferKapkaIntro.jpg';
import bufferKapka0 from '../../assets/parkings/bufferKapka/bufferkapkaIntro1.jpg';
import bufferKapka2 from '../../assets/parkings/bufferKapka/bufferKapka1.jpg';
import bufferKapka3 from '../../assets/parkings/bufferKapka/bufferKapka2.jpg';
import bufferKapka4 from '../../assets/parkings/bufferKapka/bufferKapka3.jpg';
import bufferKapka5 from '../../assets/parkings/bufferKapka/bufferKapka4.jpg';
import bufferKapka6 from '../../assets/parkings/bufferKapka/bufferKapka5.jpg';
import bufferKapka7 from '../../assets/parkings/bufferKapka/bufferKapka6.jpg';
import bufferKapka8 from '../../assets/parkings/bufferKapka/bufferKapka7.jpg';
import bufferKapka9 from '../../assets/parkings/bufferKapka/bufferKapka8.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [bufferKapka0, bufferKapka1, bufferKapka5, bufferKapka6, bufferKapka2, bufferKapka3, bufferKapka4, bufferKapka7, bufferKapka8, bufferKapka9];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.561595,27.6402203&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferKapka = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[1].name;
  const objectDescription = parkingsData[1].description;
  const parkingXtras = parkingsData.slice(1, 2);

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
            <Link to='/buffer-large'><PreviousObject/></Link>
            <Link to='/buffer-rose'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};



