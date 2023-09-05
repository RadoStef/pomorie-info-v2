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
import { AttractionsXtras } from '../../components/ObjectXtrasSection/AttractionsXtras';
import { PreviousObject } from "../../components/UI/PreviousObject";
import { NextObject } from '../../components/UI/NextObject';
import cinema1 from '../../assets/attractions/summer-cinema/kino-pomorie.jpg';
import cinema2 from '../../assets/attractions/summer-cinema/kino-pomorie2.jpg';
import cinema3 from '../../assets/attractions/summer-cinema/kino-pomorie3.jpg';
import cinema4 from '../../assets/attractions/summer-cinema/kino-pomorie4.jpg';
import cinema5 from '../../assets/attractions/summer-cinema/kino-pomorie5.jpg';
import cinema6 from '../../assets/attractions/summer-cinema/kino-pomorie6.jpg';
import cinema7 from '../../assets/attractions/summer-cinema/kino-pomorie7.jpg';
import cinema8 from '../../assets/attractions/summer-cinema/cinema11.jpg';
import cinema9 from '../../assets/attractions/summer-cinema/cinema12.jpg';
import cinema10 from '../../assets/attractions/summer-cinema/cinema13.jpg';
import cinema11 from '../../assets/attractions/summer-cinema/cinema14.jpg';
import cinema12 from '../../assets/attractions/summer-cinema/cinema15.jpg';
import cinema13 from '../../assets/attractions/summer-cinema/cinema16.jpg';
import cinema14 from '../../assets/attractions/summer-cinema/cinema17.jpg';
import cinema15 from '../../assets/attractions/summer-cinema/cinema18.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const images = [cinema1, cinema2, cinema3, cinema4, cinema5, cinema6, cinema7, cinema8, cinema9, cinema10,
cinema11, cinema12, cinema13, cinema14, cinema15];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5533142,27.6447362&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionCinema = () => {
  const { attractionsData } = useCategoryData();
  const objectName = attractionsData[7].name;
  const objectDescription = attractionsData[7].description;
  const attractionsXtras = attractionsData.slice(7, 8);
  useEffect(() => {
    goToTop();
  }, []);
  
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <AttractionsXtras attractionsExtras={attractionsXtras}/>
            <Link to='/attraction-lunapark'><PreviousObject/></Link>
            <Link to='/attraction-carriages'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
