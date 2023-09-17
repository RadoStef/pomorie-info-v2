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
import { PreviousObject } from '../../components/UI/PreviousObject';
import fountains1 from '../../assets/landmarks/fountains/fountains-cover.jpg';
import fountains2 from '../../assets/landmarks/fountains/fountains1.jpg';
import fountains3 from '../../assets/landmarks/fountains/fountains2.jpg';
import fountains4 from '../../assets/landmarks/fountains/fountains3.jpg'; 
import fountains5 from '../../assets/landmarks/fountains/fountains4.jpg'; 
import fountains6 from '../../assets/landmarks/fountains/fountains5.jpg'; 
import fountains7 from '../../assets/landmarks/fountains/fountains6.jpg'; 
import fountains8 from '../../assets/landmarks/fountains/fountains7.jpg'; 
import fountains9 from '../../assets/landmarks/fountains/fountains8.jpg'; 
import fountains10 from '../../assets/landmarks/fountains/fountains9.jpg'; 
import fountains11 from '../../assets/landmarks/fountains/fountains10.jpg'; 
import fountains12 from '../../assets/landmarks/fountains/fountains11.jpg'; 
import fountains13 from '../../assets/landmarks/fountains/fountains12.jpg'; 
import fountains14 from '../../assets/landmarks/fountains/fountains13.jpg'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [fountains1, fountains2, fountains3, fountains4, fountains5, fountains6, fountains7, fountains8, 
fountains9, fountains10, fountains11, fountains12, fountains13, fountains14];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.557188,27.638834&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkFountains = () => {
  const { landmarksData } = useCategoryData();
  const objectName = landmarksData[9].name;
  const objectDescription = landmarksData[9].description;
  const museumsXtras = landmarksData.slice(9, 10);

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
            <Link to='/landmark-lighthouse'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
