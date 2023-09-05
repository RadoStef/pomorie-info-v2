import React from 'react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import pic404 from '../../assets/404.jpg';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles['page-not-found']}>
      <AnnouncementIcon sx={{ fontSize: "55px", color: '#4bbdff'}}/>
      <h3>СТРАНИЦАТА НЕ БЕШЕ НАМЕРЕНА</h3>
      <img src={pic404} alt='страницата не беше намерена'/>
      <Link to='/..'> <Button> <BackspaceIcon sx={{ paddingRight: '10px'}}/> Обратно </Button></Link>
    </div>
  )
}

export default NotFound
