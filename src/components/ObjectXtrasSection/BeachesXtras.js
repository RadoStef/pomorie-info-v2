import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import classes from './ObjectXtras.module.css';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WcIcon from '@mui/icons-material/Wc';
import PoolIcon from '@mui/icons-material/Pool';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import ShowerIcon from '@mui/icons-material/Shower';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DirectionsIcon from '@mui/icons-material/Directions';

export const BeachesExtras = ({beachExtras}) => {
  return (
    <div className={classes['extras-wrapper']}>
      {beachExtras.map((extras) => {
        return (
          <React.Fragment key={extras.id}>
            <ul>
              <li key={extras.id}>
                <BeachAccessIcon /> <span>{extras.regime}</span>
              </li>
              <li>
                <LocalOfferIcon /> <span>{extras.price}</span>
              </li>
              <li>
                <WcIcon /> <span>{extras.toilet}</span>
              </li>
              <li>
                <PoolIcon /> <span>{extras.lifeguard}</span>
              </li>
              <li>
                <HistoryToggleOffIcon /> <span>{extras.lifeguardWorkingTime}</span>
              </li>
              <li>
                <ShowerIcon /> <span>{extras.showers}</span>
              </li>
              <li>
                <CheckroomIcon /> <span>{extras.changingPlace}</span>
              </li>
              <li>
                <RestaurantIcon /> <span>{extras.restaurant}</span>
              </li>
              <li>
                <NightlifeIcon /> <span>{extras.nightLife}</span>
              </li>
              <li><Link to={extras.gps} target='_blank'> <Button variant='outlined'> Заведи ме там <DirectionsIcon sx={{marginLeft: '10px'}}/> </Button> </Link></li>
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};
