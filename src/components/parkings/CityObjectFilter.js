import { Button } from '@mui/material';
import '../UI/FilterButtons.css';

export const CityObjectFilter = ({ onFilterOptionChange, onFilterParking }) => {
  return (
    <div className='buttons-card-wrapper'>
      <div className='result-wrapper'>
        <span>Филтър</span>
      </div>
      <Button variant='outlined' onClick={() => onFilterOptionChange('all')}>
        ВСИЧКИ ПАРКИНГИ
      </Button>
      <Button variant='outlined' onClick={() => onFilterOptionChange('free')}>
        🅿 БЕЗПЛАТНИ ПАРКИНГИ
      </Button>
      <Button variant='outlined' onClick={() => onFilterOptionChange('municipal')}>
        💰 ПЛАТЕНИ ОБЩИНСКИ
      </Button>
      <Button variant='outlined' onClick={() => onFilterOptionChange('private')}>
        💰 Платени частни
      </Button>
      <div className='result-wrapper'>
        <span>{onFilterParking.length} паркинга </span>
      </div>
    </div>
  );
};
