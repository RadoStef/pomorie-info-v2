import { useEffect } from 'react';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { LandmarksXtras } from '../../components/ObjectXtrasSection/LandmarksXtras';
import { NextObject } from '../../components/UI/NextObject';
import { PreviousObject } from '../../components/UI/PreviousObject';
import lake1 from '../../assets/landmarks/ezero/ezero.jpg';
import lake2 from '../../assets/landmarks/ezero/ezero1.jpg';
import lake3 from '../../assets/landmarks/ezero/ezero2.jpg';
import lake4 from '../../assets/landmarks/ezero/ezero3.jpg';
import lake5 from '../../assets/landmarks/ezero/ezero4.jpg';
import lake6 from '../../assets/landmarks/ezero/ezero5.jpg';
import lake7 from '../../assets/landmarks/ezero/ezero6.jpg';
import lake8 from '../../assets/landmarks/ezero/ezero7.jpg';
import lake9 from '../../assets/landmarks/ezero/ezero8.jpg';
import lake10 from '../../assets/landmarks/ezero/ezero9.jpg';
import lake11 from '../../assets/landmarks/ezero/ezero10.jpg';
import lake12 from '../../assets/landmarks/ezero/ezero11.jpg';
import lake13 from '../../assets/landmarks/ezero/ezero12.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [lake1, lake2, lake3, lake4, lake5, lake6, lake7, lake8, lake9, lake10, lake11, lake12, lake13];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.565442,27.632398&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkLake = () => {
  const { landmarksData } = useCategoryData();
  const objectName = landmarksData[1].name;
  const objectDescription = landmarksData[1].description;
  const museumsXtras = landmarksData.slice(1, 2);

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <LandmarksXtras landmarksExtras={museumsXtras}/>
            <Link to='/landmark-monastery'><PreviousObject/></Link>
            <Link to='/landmark-church'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
