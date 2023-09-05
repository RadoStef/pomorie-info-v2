import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

export const HomeButton = () => {
  return (
    <div className='link'>
      <Link to='/'>
        <Button variant='outlined' sx={{marginRight: '10px'}}><HomeIcon/></Button>
      </Link>
    </div>
  )
};
