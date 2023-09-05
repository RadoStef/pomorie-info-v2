import { useEffect } from "react";
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { BeachesExtras } from "../../components/ObjectXtrasSection/BeachesXtras";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { BeachesRestaurantList } from "../../components/ObjectReastaurantsList/BeachesRestaurantList";
import { NextObject } from "../../components/UI/NextObject";
import coverImage from '../../assets/beaches/1/pyrvi-mark.jpg';
import image1 from '../../assets/beaches/1/pyrvi.jpg';
import image2 from '../../assets/beaches/1/beachOne1.jpg';
import image3 from '../../assets/beaches/1/beachOne2.jpg';
import image4 from '../../assets/beaches/1/beachOne3.jpg';
import image5 from '../../assets/beaches/1/beachOne4.jpg';
import image6 from '../../assets/beaches/1/beachOne5.jpg';
import image7 from '../../assets/beaches/1/beachOne6.jpg';
import image8 from '../../assets/beaches/1/beachOne7.jpg';
import image9 from '../../assets/beaches/1/beachOne8.jpg';
import image10 from '../../assets/beaches/1/beachOne9.jpg';
import image11 from '../../assets/beaches/1/beachOne10.jpg';
import image12 from '../../assets/beaches/1/beachOne11.jpg';
import image13 from '../../assets/beaches/1/beachOne12.jpg';
import image14 from '../../assets/beaches/1/beachOne13.jpg';
import image15 from '../../assets/beaches/1/beachOne14.jpg';
import image16 from '../../assets/beaches/1/beachOne15.jpg';
import image17 from '../../assets/beaches/1/beachOne16.jpg';
import image18 from '../../assets/beaches/1/beachOne17.jpg';
import image19 from '../../assets/beaches/1/beachOne18.jpg';
import image20 from '../../assets/beaches/1/pyrvi0.jpg';
import image21 from '../../assets/beaches/1/pyrvi1.jpg';
import image22 from '../../assets/beaches/1/pyrvi2.jpg';
import image23 from '../../assets/beaches/1/pyrvi3.jpg';
import image24 from '../../assets/beaches/1/pyrvi4.jpg';
import image25 from '../../assets/beaches/1/pyrvi5.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [coverImage, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25
];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5563763,27.6495449&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

// TODO: Add restaurant picture to mock-data

export const BeachOne = () => {
    const { beachesData } = useCategoryData();
    const objectName = beachesData[0].name;
    const objectDescription = beachesData[0].description;
    const beachXtras = beachesData.slice(0, 1);
    const restaurantsOnThisBeach = beachesData[0]; // still in development: restaurants on beach 1 (test)

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
            <BeachesRestaurantList beachNum={restaurantsOnThisBeach}/>
            <Link to='/beach-two'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};