import React, { useState, useEffect } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './ScrollToTopButton.css';

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleButtonClick} className='scroll-to-top-button'>
          <FileUploadIcon/>
        </button>
      )}
    </>
  );
};
