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
import { PreviousObject } from "../../components/UI/PreviousObject";
import orkinos1 from '../../assets/attractions/orkinos-boat/orkinos1.jpg';
import orkinos2 from '../../assets/attractions/orkinos-boat/orkinos2.jpg';
import orkinos3 from '../../assets/attractions/orkinos-boat/orkinos3.jpg';
import orkinos4 from '../../assets/attractions/orkinos-boat/orkinos4.jpg';
import orkinos5 from '../../assets/attractions/orkinos-boat/orkinos5.jpg';
import orkinos6 from '../../assets/attractions/orkinos-boat/orkinos6.jpg';
import orkinos7 from '../../assets/attractions/orkinos-boat/orkinos7.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [orkinos1, orkinos2, orkinos3, orkinos4, orkinos5, orkinos6, orkinos7];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555452,27.639332&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionOrkinos = () => {
  const { attractionsData } = useCategoryData();
  const objectName = attractionsData[3].name;
  const objectDescription = attractionsData[3].description;
  const attractionsXtras = attractionsData.slice(3, 4);

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
            <Link to='/attraction-niya'><PreviousObject/></Link>
            <Link to='/attraction-aquapark'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
