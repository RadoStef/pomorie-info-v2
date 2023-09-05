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
import { PlaygroundXtras } from '../../components/ObjectXtrasSection/PlaygroundsXtras';
import { NextObject } from '../../components/UI/NextObject';
import playgroundCenter1 from '../../assets/playgrounds/popskata/popskataCover.jpg';
import playgroundCenter2 from '../../assets/playgrounds/popskata/popskata1.jpg';
import playgroundCenter3 from '../../assets/playgrounds/popskata/popskata2.jpg';
import playgroundCenter4 from '../../assets/playgrounds/popskata/popskata3.jpg';
import playgroundCenter5 from '../../assets/playgrounds/popskata/popskata4.jpg';
import playgroundCenter6 from '../../assets/playgrounds/popskata/popskata5.jpg';
import playgroundCenter7 from '../../assets/playgrounds/popskata/popskata6.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';


const images = [playgroundCenter1, playgroundCenter2, playgroundCenter3, playgroundCenter4, playgroundCenter5, playgroundCenter6, playgroundCenter7];
const backLink = <Link to='/playgrounds'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5568996,27.6405873&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const PlaygroundCenter = () => {
  const { playgroundsData } =  useCategoryData();
  const objectName = playgroundsData[0].name;
  const objectDescription = playgroundsData[0].description;
  const playgroundsXtras = playgroundsData.slice(0, 1);
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <PlaygroundXtras playgroundsExtras={playgroundsXtras}/>
            <Link to='/playground-newtown'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
