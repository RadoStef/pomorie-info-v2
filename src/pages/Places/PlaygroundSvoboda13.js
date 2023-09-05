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
import svoboda13 from '../../assets/playgrounds/svoboda13/svoboda13Cover.jpg';
import svoboda131 from '../../assets/playgrounds/svoboda13/svoboda131.jpg';
import svoboda132 from '../../assets/playgrounds/svoboda13/svoboda132.jpg';
import svoboda133 from '../../assets/playgrounds/svoboda13/svoboda133.jpg';
import svoboda134 from '../../assets/playgrounds/svoboda13/svoboda134.jpg';
import svoboda135 from '../../assets/playgrounds/svoboda13/svoboda135.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [ svoboda13, svoboda131, svoboda132, svoboda133, svoboda134, svoboda135 ];
const backLink = <Link to='/playgrounds'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.561994,27.632531&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const PlaygroundSvoboda13 = () => {
  const { playgroundsData } = useCategoryData();
  const objectName = playgroundsData[2].name;
  const objectDescription = playgroundsData[2].description;
  const playgroundsXtras = playgroundsData.slice(2, 3);
  
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
            <Link to='/playground-newtown'><PreviousObject/></Link>
            <Link to='/playground-svoboda20'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
