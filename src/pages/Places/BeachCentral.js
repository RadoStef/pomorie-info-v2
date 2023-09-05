import { useEffect } from 'react';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Link } from 'react-router-dom';
import { AppHeaderBar } from '../../components/HeaderSection/AppHeaderBar';
import { BeachesExtras } from '../../components/ObjectXtrasSection/BeachesXtras';
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from '../../components/ObjectDescriptionSection/ObjectDescription';
import { goToTop } from '../../components/mock-data/data';
import { Footer } from '../../components/Footer/Footer';
import { MapSection } from '../../components/ObjectMapSection/ObjectMap';
import { Breadcrumb } from '../../components/BreadCrumbSection/Breadcrumb';
import { PreviousObject } from '../../components/UI/PreviousObject';
import { NextObject } from '../../components/UI/NextObject';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import coverImage from '../../assets/beaches/centralen/centralen-marked.jpg';
import image1 from '../../assets/beaches/centralen/centralen.jpg';
import image2 from '../../assets/beaches/centralen/centralen0.jpg';
import image3 from '../../assets/beaches/centralen/centralen1.jpg';
import image4 from '../../assets/beaches/centralen/centralen2.jpg';
import image5 from '../../assets/beaches/centralen/centralen3.jpg';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';


const images = [coverImage, image1, image2, image3, image4, image5];
const backLink = (
  <Link to='/beaches'>
    <Button>
      <ArrowBackIcon />
    </Button>
  </Link>
);

const mapContent = (
  <div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
      <iframe
        className={styles['gmap-iframe']}
        width='100%'
        frameborder='0'
        src='https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5679103,27.6394217&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        title='Object Map'
      ></iframe>
    </div>
  </div>
);

export const BeachCentral = () => {
  const { beachesData } = useCategoryData();
  const objectName = beachesData[6].name;
  const objectDescription = beachesData[6].description;
  const beachXtras = beachesData.slice(6, 7);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      <ObjectDescriptionCard>
        <AppHeaderBar />
        <Breadcrumb backLink={backLink} />
        <ObjectDescription images={images} text={objectDescription} objectName={objectName} />
        <BeachesExtras beachExtras={beachXtras} />
        <Link to='/beach-atrium'>
          <PreviousObject />
        </Link>
        <Link to='/beach-south-one'>
          <NextObject />
        </Link>
        <MapSection map={mapContent} />
      </ObjectDescriptionCard>
      <Footer />
    </>
  );
};
