import React from 'react';
import classes from './ObjectXtras.module.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button } from '@mui/material';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';

export const MuseumsXtras = ({ museumsExtras }) => {
  return (
    <div className={classes['extras-wrapper']}>
      {museumsExtras.map((extras) => {
        return (
          <React.Fragment key={extras.id}>
            <ul>
              <li key={extras.id}>
                <MonetizationOnIcon /> <span> Цени: {extras.prices}</span>
              </li>
              <li>
                <HistoryToggleOffIcon /> <span>{extras.workTime}</span>
              </li>
              <li>
                <PhoneForwardedIcon /> <span>{extras.phoneNumber}</span>
              </li>
              <li>
                <BusinessIcon /> <span>{extras.address}</span>
              </li>
              <li>
                <LanguageIcon />
                <span>
                  <Link to={extras.website} target='_blank'>
                    Официален уебсайт
                  </Link>
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
