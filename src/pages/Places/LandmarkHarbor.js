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
import harbor1 from '../../assets/landmarks/oldharbor/stariyat-key0.jpg';
import harbor2 from '../../assets/landmarks/oldharbor/stariyat-key1.jpg';
import harbor3 from '../../assets/landmarks/oldharbor/stariyat-key2.jpg';
import harbor4 from '../../assets/landmarks/oldharbor/stariyat-key3.jpg';
import harbor5 from '../../assets/landmarks/oldharbor/stariyat-key4.jpg';
import harbor6 from '../../assets/landmarks/oldharbor/stariyat-key5.jpg';
import harbor7 from '../../assets/landmarks/oldharbor/stariyat-key6.jpg';
import harbor8 from '../../assets/landmarks/oldharbor/stariyat-key7.jpg';
import harbor9 from '../../assets/landmarks/oldharbor/oldHarbor11.jpg';
import harbor10 from '../../assets/landmarks/oldharbor/oldHarbor12.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [harbor1, harbor2, harbor3, harbor4, harbor5, harbor6, harbor7, harbor8, harbor9, harbor10];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555931,27.640049&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkHarbor = () => {
  const { landmarksData } = useCategoryData();
  const objectName = landmarksData[7].name;
  const objectDescription = landmarksData[7].description;
  const museumsXtras = landmarksData.slice(7, 8);

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
            <Link to='/landmark-boy'><PreviousObject/></Link>
            <Link to='/landmark-lighthouse'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
