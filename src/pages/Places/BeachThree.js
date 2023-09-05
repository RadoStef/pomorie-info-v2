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
import { Button } from "@mui/material";
import { PreviousObject } from "../../components/UI/PreviousObject";
import { NextObject } from "../../components/UI/NextObject";
import coverImage from '../../assets/beaches/sunnybay/sunny-bay-marked.jpg';
import image1 from '../../assets/beaches/sunnybay/sunnybay1.jpg';
import image2 from '../../assets/beaches/sunnybay/sunnybay2.jpg';
import image3 from '../../assets/beaches/sunnybay/beachThree1.jpg';
import image4 from '../../assets/beaches/sunnybay/beachThree2.jpg';
import image5 from '../../assets/beaches/sunnybay/beachThree3.jpg';
import image6 from '../../assets/beaches/sunnybay/beachThree4.jpg';
import image7 from '../../assets/beaches/sunnybay/beachThree5.jpg';
import image8 from '../../assets/beaches/sunnybay/beachThree6.jpg';
import image9 from '../../assets/beaches/sunnybay/beachThree7.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [coverImage, image1, image2, image3, image4, image5, image6, image7, image8, image9 ];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5595062,27.6458568&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachThree = () => {
    const { beachesData } = useCategoryData();
    const objectName = beachesData[2].name;
    const objectDescription = beachesData[2].description;
    const beachXtras = beachesData.slice(2, 3);

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
            <Link to='/beach-sopharma'><NextObject/></Link>
            <Link to='/beach-two'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};