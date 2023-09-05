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
import coverImage from '../../assets/beaches/inzhstroi/inzhstroy-marked.jpg';
import image1 from '../../assets/beaches/inzhstroi/lahabana0.jpg';
import image2 from '../../assets/beaches/inzhstroi/lahabana4.jpg';
import image3 from '../../assets/beaches/inzhstroi/lahabana5.jpg';
import image4 from '../../assets/beaches/inzhstroi/lahabana6.jpg';
import image5 from '../../assets/beaches/inzhstroi/lahabana7.jpg';
import image6 from '../../assets/beaches/inzhstroi/lahabana8.jpg';
import image7 from '../../assets/beaches/inzhstroi/lahabana9.jpg';
import image8 from '../../assets/beaches/inzhstroi/lahabana10.jpg';
import image9 from '../../assets/beaches/inzhstroi/lahabana11.jpg';
import image10 from '../../assets/beaches/inzhstroi/lahabana12.jpg';
import image11 from '../../assets/beaches/inzhstroi/lahabana13.jpg';
import image12 from '../../assets/beaches/inzhstroi/lahabana14.jpg';
import image13 from '../../assets/beaches/inzhstroi/sopharma3.jpg';
import image14 from '../../assets/beaches/inzhstroi/sopharma4.jpg';
import image15 from '../../assets/beaches/inzhstroi/sopharma5.jpg';
import image16 from '../../assets/beaches/inzhstroi/sopharma6.jpg';
import image17 from '../../assets/beaches/inzhstroi/sopharma7.jpg';
import image18 from '../../assets/beaches/inzhstroi/sopharma8.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [coverImage, image1, image14, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image15, image16, image17, image18
];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5605895,27.6451444&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachSopharma = () => {
    const { beachesData } = useCategoryData();
    const objectName = beachesData[3].name;
    const objectDescription = beachesData[3].description;
    const beachXtras = beachesData.slice(3, 4);

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
            <Link to='/beach-pompata'><NextObject/></Link>
            <Link to='/beach-three'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};