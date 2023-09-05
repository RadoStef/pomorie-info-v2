import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LanguageIcon from '@mui/icons-material/Language';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsIcon from '@mui/icons-material/Directions';
import styles from './ObjectXtras.module.css';

export const AttractionsXtras = ({ attractionsExtras }) => {
  return (
    <div className={styles['extras-wrapper']}>
      {attractionsExtras.map((extras) => {
        return (
          <React.Fragment key={extras.id}>
            <ul>
              <li key={extras.id}>
                <HistoryToggleOffIcon /> <span>{extras.workTime}</span>
              </li>
              <li>
                <LocalOfferIcon />
                <span>{extras.prices === `` ? <p>няма точна информация</p> : extras.prices}</span>
              </li>
              <li>
                <PhoneForwardedIcon /> <span>{extras.phoneNumber}</span>
              </li>
              <li>
                <BusinessIcon /> <span>{extras.address}</span>
              </li>
              <li>
                <LanguageIcon />{' '}
                <span>
                  {extras.website === `` ? (
                    <p>няма</p>
                  ) : (
                    <Link to={extras.website} target='_blank'>
                      Официален уебсайт
                    </Link>
                  )}
                </span>
              </li>
              <li>
                <Link to={extras.gps} target='_blank'>
                  <Button variant='outlined'>
                    Заведи ме там <DirectionsIcon sx={{ marginLeft: '10px' }} />
                  </Button>
                </Link>
              </li>
            </ul>
          </React.Fragment>
        );
      })}
      <ScrollToTopButton />
    </div>
  );
};
