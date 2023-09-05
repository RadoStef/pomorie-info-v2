import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import styles from './ObjectDescription.module.css';

export const ObjectDescription = ({ images, text, objectName }) => {
  const [toggler, setToggler] = useState(false);

  const toggleHandler = () => {
    setToggler(!toggler);
  };

  return (
    <div className={styles['section-wrapper']}>
      <div className={styles['description-wrapper']}>
        <h3>{objectName}</h3>
        <div>{text}</div>
      </div>
      <div>
        <FsLightbox toggler={toggler} sources={images} />
      </div>
      <div className={styles['pictures-wrapper']}>
        <img
          className={styles['lightbox-img']}
          src={images[0]}
          alt={objectName}
          onClick={toggleHandler}
        />
        <div className={styles['button-layer']}>
          <button className={styles['gallery-btn']} onClick={toggleHandler}>
            фото галерия
          </button>
        </div>
      </div>
    </div>
  );
};
