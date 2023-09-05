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
import { PreviousObject } from '../../components/UI/PreviousObject';
import chaika from '../../assets/playgrounds/chaika/chaikaCover.jpg';
import chaika1 from '../../assets/playgrounds/chaika/chaika1.jpg'
import chaika2 from '../../assets/playgrounds/chaika/chaika2.jpg'
import chaika3 from '../../assets/playgrounds/chaika/chaika3.jpg'
import chaika4 from '../../assets/playgrounds/chaika/chaika4.jpg'
import chaika5 from '../../assets/playgrounds/chaika/chaika5.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [ chaika, chaika1, chaika2, chaika3, chaika4, chaika5 ];
const backLink = <Link to='/playgrounds'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.561615,27.6026413&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const PlaygroundChaika = () => {
  const { playgroundsData } = useCategoryData();
  const objectName = playgroundsData[5].name;
  const objectDescription = playgroundsData[5].description;
  const playgroundsXtras = playgroundsData.slice(5, 6);

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
            <Link to='/playground-museum'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
