import { useEffect } from "react";
import { useCategoryData } from "../../contexts/CategoriesContext";
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { BeachesExtras } from "../../components/ObjectXtrasSection/BeachesXtras";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from "../../components/UI/PreviousObject";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import coverImage from '../../assets/beaches/atrium/atrium-marked.jpg';
import image1 from '../../assets/beaches/atrium/atrium.jpg';
import image2 from '../../assets/beaches/atrium/atrium1.jpg';
import image3 from '../../assets/beaches/atrium/atrium2.jpg';
import image4 from '../../assets/beaches/atrium/atrium3.jpg';
import image5 from '../../assets/beaches/atrium/atrium4.jpg';
import image6 from '../../assets/beaches/atrium/atrium5.jpg';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [coverImage, image1, image2, image3, image4, image5, image6];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5655771,27.6412504&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachAtrium = () => {
    const { beachesData } = useCategoryData();
    const objectName = beachesData[5].name;
    const objectDescription = beachesData[5].description;
    const beachXtras = beachesData.slice(5, 6);
    useEffect(() => {
        goToTop();
    }, []);

    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <BeachesExtras beachExtras={beachXtras}/>
            <Link to='/beach-central'><NextObject/></Link>
            <Link to='/beach-pompata'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};