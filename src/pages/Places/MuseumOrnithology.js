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
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from '../../components/UI/PreviousObject';
import { MuseumsXtras } from '../../components/ObjectXtrasSection/MuseumsXtras';
import ornithology1 from '../../assets/museums/ornithology/ornithology.jpg';
import ornithology2 from '../../assets/museums/ornithology/ornithology1.jpg';
import ornithology3 from '../../assets/museums/ornithology/ornithology2.jpg';
import ornithology4 from '../../assets/museums/ornithology/ornithology3.jpg';
import ornithology5 from '../../assets/museums/ornithology/ornithology4.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [ornithology1, ornithology2, ornithology3, ornithology4, ornithology5];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>;

const mapContent = 
<div className={styles.mapouter}>
    <div className={styles['gmap-canvas']}>
        <iframe className={styles['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.565450,27.631021&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const MuseumOrnithology = () => {
  const { museumsData } = useCategoryData();
  const objectName = museumsData[3].name;
  const objectDescription = museumsData[3].description;
  const museumsXtras = museumsData.slice(3, 4);

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <MuseumsXtras museumsExtras={museumsXtras}/>
            <Link to='/museum-thomb'><PreviousObject/></Link>
            <Link to='/museum-gallery'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
