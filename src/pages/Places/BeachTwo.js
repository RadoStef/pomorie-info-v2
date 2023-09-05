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
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from "../../components/UI/PreviousObject";
import coverImage from '../../assets/beaches/2/vtori-mark.jpg';
import image1 from '../../assets/beaches/2/beachTwo1.jpg';
import image2 from '../../assets/beaches/2/beachTwo2.jpg';
import image3 from '../../assets/beaches/2/beachTwo3.jpg';
import image4 from '../../assets/beaches/2/beachTwo4.jpg';
import image5 from '../../assets/beaches/2/beachTwo5.jpg';
import image6 from '../../assets/beaches/2/beachTwo6.jpg';
import image7 from '../../assets/beaches/2/beachTwo7.jpg';
import image8 from '../../assets/beaches/2/beachTwo8.jpg';
import image9 from '../../assets/beaches/2/beachTwo9.jpg';
import image10 from '../../assets/beaches/2/beachTwo10.jpg';
import image11 from '../../assets/beaches/2/beachTwo11.jpg';
import image12 from '../../assets/beaches/2/beachTwo13.jpg';
import image13 from '../../assets/beaches/2/beachTwo14.jpg';
import image14 from '../../assets/beaches/2/beachTwo15.jpg';
import image15 from '../../assets/beaches/2/beachTwo16.jpg';
import image16 from '../../assets/beaches/2/beachTwo17.jpg';
import image17 from '../../assets/beaches/2/beachTwo18.jpg';
import image18 from '../../assets/beaches/2/beachTwo20.jpg';
import image19 from '../../assets/beaches/2/beachTwo21.jpg';
import image20 from '../../assets/beaches/2/beachTwo22.jpg';
import image21 from '../../assets/beaches/2/beachTwo23.jpg';
import image22 from '../../assets/beaches/2/vtori.jpg';
import image23 from '../../assets/beaches/2/vtori1.jpg';
import image24 from '../../assets/beaches/2/vtori2.jpg';
import image25 from '../../assets/beaches/2/vtori3.jpg';
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
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5575356,27.6479714&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachTwo = () => {
    const { beachesData } = useCategoryData();
    const objectName = beachesData[1].name;
    const objectDescription = beachesData[1].description;
    const beachXtras = beachesData.slice(1, 2);

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
            <Link to='/beach-three'><NextObject/></Link>
            <Link to='/beach-one'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};
