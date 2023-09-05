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
import { PreviousObject } from '../../components/UI/PreviousObject';
import svoboda20 from '../../assets/playgrounds/svoboda20/svoboda20Cover.jpg';
import svoboda201 from '../../assets/playgrounds/svoboda20/svoboda201.jpg';
import svoboda202 from '../../assets/playgrounds/svoboda20/svoboda202.jpg';
import svoboda203 from '../../assets/playgrounds/svoboda20/svoboda203.jpg';
import svoboda204 from '../../assets/playgrounds/svoboda20/svoboda204.jpg';
import svoboda205 from '../../assets/playgrounds/svoboda20/svoboda205.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [ svoboda20, svoboda201, svoboda202, svoboda203, svoboda204, svoboda205 ];
const backLink = <Link to='/playgrounds'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.563522,27.629876&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const PlaygroundSvoboda20 = () => {
  const { playgroundsData } = useCategoryData();
  const objectName = playgroundsData[3].name;
  const objectDescription = playgroundsData[3].description;
  const playgroundsXtras = playgroundsData.slice(3, 4);

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
            <Link to='/playground-svoboda13'><PreviousObject/></Link>
            <Link to='/playground-museum'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
