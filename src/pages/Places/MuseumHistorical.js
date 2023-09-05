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
import { NextObject } from "../../components/UI/NextObject";
import { MuseumsXtras } from '../../components/ObjectXtrasSection/MuseumsXtras';
import historical1 from '../../assets/museums/museum/museum.jpg';
import historical2 from '../../assets/museums/museum/museum2.jpg';
import historical3 from '../../assets/museums/museum/museum3.jpg';
import historical4 from '../../assets/museums/museum/museum4.jpg';
import historical5 from '../../assets/museums/museum/museum5.jpg';
import historical6 from '../../assets/museums/museum/museum6.jpg';
import historical7 from '../../assets/museums/museum/museum7.jpg';
import historical8 from '../../assets/museums/museum/museum8.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [historical1, historical2, historical3, historical4, historical5, historical6, historical7, historical8];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.554445, 27.646031&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const MuseumHistorical = () => {
  const { museumsData } = useCategoryData();
  const objectName = museumsData[0].name;
  const objectDescription = museumsData[0].description;
  const museumsXtras = museumsData.slice(0, 1);

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <MuseumsXtras museumsExtras={museumsXtras}/>
            <Link to='/museum-salt'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
