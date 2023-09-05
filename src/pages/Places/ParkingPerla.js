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
import perla1 from '../../assets/parkings/perla/perlaCover.jpg';
import perla2 from '../../assets/parkings/perla/perla1.jpg';
import perla3 from '../../assets/parkings/perla/perla3.jpg';
import perla4 from '../../assets/parkings/perla/perla4.jpg';
import perla5 from '../../assets/parkings/perla/perla5.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [perla1, perla2, perla3, perla4, perla5];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.553372, 27.642496&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingPerla = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[7].name;
  const objectDescription = parkingsData[7].description;
  const parkingXtras = parkingsData.slice(7, 8);

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
            <Link to='/parking-trafficlights'><PreviousObject/></Link>
            <Link to='/parking-tokaliev'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
