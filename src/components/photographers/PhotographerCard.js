import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { photographersAndGalleries } from '../mock-data/data';
import FsLightbox from 'fslightbox-react';
import LazyLoad from 'react-lazy-load';
import styles from './PhotographerCard.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const PhotographerCard = () => {
  const [toggler, setToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

  const toggleHandler = (gallery) => {
    setCurrentGallery(gallery);
    setToggler(!toggler);
  };

  return (
    <div>
      {photographersAndGalleries.map((photographer) => {
        return (
          <div className={styles['photographer-wrapper']} key={photographer.name}>
            
            <div className={styles['photographer-logo-wrapper']}>
              <img src={photographer.image} alt={photographer.name} />
            </div>

            <div>
              <p>Фотограф: <b>{photographer.name}</b></p>
              <p>От: <b>{photographer.location}</b></p>
              <p>
                уебсайт:
                {photographer.website === '' ? (
                  <span>'няма'</span>
                ) : (
                    <Link to={photographer.website} target='_blank'> Разгледай Тук </Link>
                  )}
              </p>
              <p><b>{photographer.gallery.length}</b> снимки в галерията</p>
            </div>
              <div className={styles['slide-wrapper']}>
                <Carousel dynamicHeight emulateTouch width='100%' showIndicators={false}>
                  {photographer.gallery.map((image, index) => {
                    return (
                      <LazyLoad key={index} placeholder={<img src={image} alt={`${index + 1}`} />}>
                          <img src={image} alt={`${index + 1}`} />
                      </LazyLoad>
                    )
                  })}
                </Carousel>
              </div>
            <button onClick={() => toggleHandler(photographer.gallery)} className={styles['lightbox-button']}> Разгледай на цял екран </button>
          </div>
        );
      })}

      {currentGallery.length > 0 && (
        <FsLightbox toggler={toggler} sources={currentGallery} />
      )}
    </div>
  );
};
