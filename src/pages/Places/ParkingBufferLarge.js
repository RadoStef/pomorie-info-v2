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
import bufferChurch1 from '../../assets/parkings/bufferChurch/bufferChurchEntry.jpg';
import bufferChurch2 from '../../assets/parkings/bufferChurch/bufferChurch1.jpg';
import bufferChurch3 from '../../assets/parkings/bufferChurch/bufferChurch2.jpg';
import bufferChurch4 from '../../assets/parkings/bufferChurch/bufferChurch3.jpg';
import bufferChurch5 from '../../assets/parkings/bufferChurch/bufferChurch4.jpg';
import bufferChurch6 from '../../assets/parkings/bufferChurch/bufferChurch5.jpg';
import bufferChurch7 from '../../assets/parkings/bufferChurch/bufferChurch6.jpg';
import bufferChurch8 from '../../assets/parkings/bufferChurch/bufferChurch7.jpg';
import bufferChurch9 from '../../assets/parkings/bufferChurch/bufferChurch8.jpg';
import bufferChurch10 from '../../assets/parkings/bufferChurch/bufferChurch9.jpg';
import bufferChurch11 from '../../assets/parkings/bufferChurch/bufferChurch10.jpg';
import bufferChurch12 from '../../assets/parkings/bufferChurch/bufferChurch11.jpg';
import bufferChurch13 from '../../assets/parkings/bufferChurch/bufferChurch12.jpg';
import bufferChurch14 from '../../assets/parkings/bufferChurch/bufferChurch13.jpg';
import bufferChurch15 from '../../assets/parkings/bufferChurch/bufferChurch14.jpg';
import bufferChurch16 from '../../assets/parkings/bufferChurch/bufferChurch15.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [bufferChurch1, bufferChurch7, bufferChurch8, bufferChurch15, bufferChurch2, bufferChurch3, bufferChurch4, bufferChurch5, bufferChurch6, 
  bufferChurch9, bufferChurch10, bufferChurch11, bufferChurch12, bufferChurch13, bufferChurch14, bufferChurch16
];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.562059,27.6304533&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferLarge = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[0].name;
  const objectDescription = parkingsData[0].description;
  const parkingXtras = parkingsData.slice(0, 1);

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
            <Link to='/buffer-kapka'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};