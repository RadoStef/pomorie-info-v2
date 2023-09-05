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
import { NextObject } from '../../components/UI/NextObject';
import coverImage from '../../assets/beaches/south/southOneCover.jpg';
import image1 from '../../assets/beaches/south/south.jpg';
import image2 from '../../assets/beaches/south/southOne.jpg';
import image3 from '../../assets/beaches/south/southOne1.jpg';
import image4 from '../../assets/beaches/south/southOne2.jpg';
import image5 from '../../assets/beaches/south/southOne3.jpg';
import image6 from '../../assets/beaches/south/southOne4.jpg';
import image7 from '../../assets/beaches/south/southOne5.jpg';
import image8 from '../../assets/beaches/south/southOne6.jpg';
import image9 from '../../assets/beaches/south/southOne7.jpg';
import image10 from '../../assets/beaches/south/southOne8.jpg';
import image11 from '../../assets/beaches/south/southOne9.jpg';
import image12 from '../../assets/beaches/south/southOne10.jpg';
import image13 from '../../assets/beaches/south/southOne11.jpg';
import image14 from '../../assets/beaches/south/southOne12.jpg';
import image15 from '../../assets/beaches/south/southOne13.jpg';
import image16 from '../../assets/beaches/south/southOne14.jpg';
import image17 from '../../assets/beaches/south/southOne15.jpg';
import image18 from '../../assets/beaches/south/southOne16.jpg';
import image19 from '../../assets/beaches/south/southOne17.jpg';
import image20 from '../../assets/beaches/south/southOne18.jpg';
import image21 from '../../assets/beaches/south/southOne19.jpg';
import image22 from '../../assets/beaches/south/southOne20.jpg';
import image23 from '../../assets/beaches/south/southOne21.jpg';
import image24 from '../../assets/beaches/south/southOne22.jpg';
import image25 from '../../assets/beaches/south/southOne23.jpg';
import image26 from '../../assets/beaches/south/southOne24.jpg';
import image27 from '../../assets/beaches/south/southOne25.jpg';
import image28 from '../../assets/beaches/south/southOne26.jpg';
import image29 from '../../assets/beaches/south/southOne27.jpg';
import image30 from '../../assets/beaches/south/southOne28.jpg';
import image31 from '../../assets/beaches/south/southOne29.jpg';
import image32 from '../../assets/beaches/south/southOne30.jpg';
import image33 from '../../assets/beaches/south/southOne31.jpg';
import image34 from '../../assets/beaches/south/southOne32.jpg';
import image35 from '../../assets/beaches/south/southOne33.jpg';
import image36 from '../../assets/beaches/south/southOne34.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';


const images = [coverImage, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, 
  image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36
];
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
        src='https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5652028,27.6109235&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        title='Object Map'
      ></iframe>
    </div>
  </div>
);

export const BeachSouthOne = () => {
  const { beachesData } = useCategoryData();
  const objectName = beachesData[7].name;
  const objectDescription = beachesData[7].description;
  const beachXtras = beachesData.slice(7, 8);
  
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
        <Link to='/beach-south-two'>
          <NextObject />
        </Link>
        <Link to='/beach-central'>
          <PreviousObject />
        </Link>
        
        <MapSection map={mapContent} />
      </ObjectDescriptionCard>
      <Footer />
    </>
  );
};
