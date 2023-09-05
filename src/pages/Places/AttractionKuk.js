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
import { AttractionsXtras } from '../../components/ObjectXtrasSection/AttractionsXtras';
import { NextObject } from '../../components/UI/NextObject';
import kuk1 from '../../assets/attractions/kuk-boat/kuk1.jpg';
import kuk2 from '../../assets/attractions/kuk-boat/kuk2.jpg';
import kuk3 from '../../assets/attractions/kuk-boat/kuk3.jpg';
import kuk4 from '../../assets/attractions/kuk-boat/kuk4.jpg';
import kuk5 from '../../assets/attractions/kuk-boat/kuk5.jpg';
import kuk6 from '../../assets/attractions/kuk-boat/kuk6.jpg';
import kuk7 from '../../assets/attractions/kuk-boat/kuk7.jpg';
import kuk8 from '../../assets/attractions/kuk-boat/kuk8.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [kuk1, kuk2, kuk3, kuk4, kuk5, kuk6, kuk7, kuk8];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.553057,27.642097&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionKuk = () => {
  const { attractionsData } = useCategoryData();
  const objectName = attractionsData[0].name;
  const objectDescription = attractionsData[0].description;
  const attractionsXtras = attractionsData.slice(0, 1);

  useEffect(() => {
    goToTop();
  }, []);
  
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <AttractionsXtras attractionsExtras={attractionsXtras}/>
            <Link to='/attraction-blackperl'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
