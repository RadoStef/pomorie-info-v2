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
import { Button } from '@mui/material';
import coverImage from '../../assets/beaches/south/southTwoCover.jpg';
import image1 from '../../assets/beaches/south/southTwo1.jpg';
import image2 from '../../assets/beaches/south/southTwo1.jpg';
import image3 from '../../assets/beaches/south/southTwo2.jpg';
import image4 from '../../assets/beaches/south/southTwo3.jpg';
import image5 from '../../assets/beaches/south/southTwo4.jpg';
import image6 from '../../assets/beaches/south/southTwo5.jpg';
import image7 from '../../assets/beaches/south/southTwo6.jpg';
import image8 from '../../assets/beaches/south/southTwo7.jpg';
import image9 from '../../assets/beaches/south/southTwo8.jpg';
import image10 from '../../assets/beaches/south/southTwo9.jpg';
import image11 from '../../assets/beaches/south/southTwo10.jpg';
import image12 from '../../assets/beaches/south/southTwo11.jpg';
import image13 from '../../assets/beaches/south/southTwo12.jpg';
import image14 from '../../assets/beaches/south/southTwo13.jpg';
import image15 from '../../assets/beaches/south/southTwo14.jpg';
import image16 from '../../assets/beaches/south/southTwo15.jpg';
import image17 from '../../assets/beaches/south/southTwo16.jpg';
import image18 from '../../assets/beaches/south/southTwo17.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [coverImage, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18 ];
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
        src='https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5638339,27.6062326&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        title='Object Map'
      ></iframe>
    </div>
  </div>
);

export const BeachSouthTwo = () => {
  const { beachesData } = useCategoryData();
  const objectName = beachesData[8].name;
  const objectDescription = beachesData[8].description;
  const beachXtras = beachesData.slice(8, 9);

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
        <Link to='/beach-south-one'>
          <PreviousObject />
        </Link>
        <MapSection map={mapContent} />
      </ObjectDescriptionCard>
      <Footer />
    </>
  );
};
