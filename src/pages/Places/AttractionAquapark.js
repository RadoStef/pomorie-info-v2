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
import aquapark1 from '../../assets/attractions/aquapark/sunset.jpg';
import aquapark2 from '../../assets/attractions/aquapark/sunset1.jpg';
import aquapark3 from '../../assets/attractions/aquapark/sunset2.jpg';
import aquapark4 from '../../assets/attractions/aquapark/sunset3.jpg';
import aquapark5 from '../../assets/attractions/aquapark/sunset4.jpg';
import aquapark6 from '../../assets/attractions/aquapark/sunset5.jpg';
import aquapark7 from '../../assets/attractions/aquapark/sunset6.jpg';
import aquapark8 from '../../assets/attractions/aquapark/sunset7.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [aquapark1, aquapark2, aquapark3, aquapark4, aquapark5, aquapark6, aquapark7, aquapark8];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5643424,27.5992361&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionAquapark = () => {
  const { attractionsData} = useCategoryData();
  const objectName = attractionsData[4].name;
  const objectDescription = attractionsData[4].description;
  const attractionsXtras = attractionsData.slice(4, 5);

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
            <Link to='/attraction-orkinos'><PreviousObject/></Link>
            <Link to='/attraction-train'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
