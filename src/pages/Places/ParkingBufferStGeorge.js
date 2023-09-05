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
import bufferStGeorge from '../../assets/parkings/bufferStGeorge/bufferStGeorgeCover.jpg'
import bufferStGeorge1 from '../../assets/parkings/bufferStGeorge/bufferStGeorge1.jpg'
import bufferStGeorge2 from '../../assets/parkings/bufferStGeorge/bufferStGeorge2.jpg'
import bufferStGeorge3 from '../../assets/parkings/bufferStGeorge/bufferStGeorge3.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from '../../components/UI/NextObject';

const images = [bufferStGeorge, bufferStGeorge1, bufferStGeorge2, bufferStGeorge3];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.567432,27.617031&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferStGeorge = () => {
  const { parkingsData } = useCategoryData();
  const objectName = parkingsData[3].name;
  const objectDescription = parkingsData[3].description;
  const parkingXtras = parkingsData.slice(3, 4);

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
            <Link to='/buffer-rose'><PreviousObject/></Link>
            <Link to="/parking-zone"><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
