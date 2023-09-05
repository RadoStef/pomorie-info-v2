import React from 'react';
import './CustomCard.css';

export const CustomCard = ({children}) => {
  return (
    <div className='card-container'>
      {children}
    </div>
  )
};
