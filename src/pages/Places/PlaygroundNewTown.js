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
import playgroundStGeorge from '../../assets/playgrounds/parkStGeorge/parkStGeorgeCover.jpg';
import playgroundStGeorge1 from '../../assets/playgrounds/parkStGeorge/parkStGeorge1.jpg';
import playgroundStGeorge2 from '../../assets/playgrounds/parkStGeorge/parkStGeorge2.jpg';
import playgroundStGeorge3 from '../../assets/playgrounds/parkStGeorge/parkStGeorge3.jpg';
import playgroundStGeorge4 from '../../assets/playgrounds/parkStGeorge/parkStGeorge4.jpg';
import playgroundStGeorge5 from '../../assets/playgrounds/parkStGeorge/parkStGeorge5.jpg';
import playgroundStGeorge6 from '../../assets/playgrounds/parkStGeorge/parkStGeorge6.jpg';
import playgroundStGeorge7 from '../../assets/playgrounds/parkStGeorge/parkStGeorge7.jpg';
import playgroundStGeorge8 from '../../assets/playgrounds/parkStGeorge/parkStGeorge8.jpg';
import playgroundStGeorge9 from '../../assets/playgrounds/parkStGeorge/parkStGeorge9.jpg';
import playgroundStGeorge10 from '../../assets/playgrounds/parkStGeorge/parkStGeorge10.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [playgroundStGeorge, playgroundStGeorge1, playgroundStGeorge2, playgroundStGeorge3, playgroundStGeorge4, playgroundStGeorge5,
  playgroundStGeorge6, playgroundStGeorge7, playgroundStGeorge8, playgroundStGeorge9, playgroundStGeorge10
];
const backLink = <Link to='/playgrounds'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5671489,27.6156537&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const PlaygroundNewTown = () => {
  const { playgroundsData } = useCategoryData();
  const objectName = playgroundsData[1].name;
  const objectDescription = playgroundsData[1].description;
  const playgroundsXtras = playgroundsData.slice(1, 2);

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
            <Link to='/playground-center'><PreviousObject/></Link>
            <Link to='/playground-svoboda13'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
