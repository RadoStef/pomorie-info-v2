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
import blackPerl1 from '../../assets/attractions/black-pearl/black-pearl.jpg';
import blackPerl2 from '../../assets/attractions/black-pearl/black-pearl1.jpg';
import blackPerl3 from '../../assets/attractions/black-pearl/black-pearl2.jpg';
import blackPerl4 from '../../assets/attractions/black-pearl/black-pearl3.jpg';
import blackPerl5 from '../../assets/attractions/black-pearl/black-pearl4.jpg';
import blackPerl6 from '../../assets/attractions/black-pearl/black-pearl5.jpg';
import blackPerl7 from '../../assets/attractions/black-pearl/black-pearl6.jpg';
import blackPerl8 from '../../assets/attractions/black-pearl/black-pearl7.jpg';
import blackPerlSign from '../../assets/attractions/black-pearl/blackPearlSign.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [blackPerl1, blackPerlSign, blackPerl2, blackPerl3, blackPerl4, blackPerl5, blackPerl6, blackPerl7, blackPerl8];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555452,27.639332&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionBlackperl = () => {
  const {attractionsData} = useCategoryData();
  const objectName = attractionsData[1].name;
  const objectDescription = attractionsData[1].description;
  const attractionsXtras = attractionsData.slice(1, 2);

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
            <Link to='/attraction-kuk'><PreviousObject/></Link>
            <Link to='/attraction-niya'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
