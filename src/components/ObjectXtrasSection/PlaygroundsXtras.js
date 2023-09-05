import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import React from 'react';
import classes from './ObjectXtras.module.css';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import DirectionsIcon from '@mui/icons-material/Directions';

export const PlaygroundXtras = ({ playgroundsExtras }) => {
  return (
    <div className={classes['extras-wrapper']}>
      {playgroundsExtras.map((extras) => {
        return (
          <React.Fragment key={extras.id}>
            <ul>
              <li key={extras.id}>
                <HistoryToggleOffIcon /> <span>{extras.workTime}</span>
              </li>
              <li>
                <PhoneForwardedIcon /> <span>{extras.phoneNumber}</span>
              </li>
              <li>
                <BusinessIcon /> <span>{extras.address}</span>
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
    </div>
  );
};
