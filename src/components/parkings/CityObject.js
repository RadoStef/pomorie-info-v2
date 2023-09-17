import { useEffect, useState } from 'react';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { CityObjectCard } from './CityObjectCard';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { pageTitles } from '../mock-data/data';
import { CityObjectFilter } from './CityObjectFilter';
import { ObjectsWrapper } from '../UI/ObjectsWrapper';

export const CityObject = () => {
  const { parkingsData } = useCategoryData();
  const [filterOption, setFilterOption] = useState('all');
  const [filteredParkings, setFilteredParkings] = useState(parkingsData);

  useEffect(() => {
    document.title =  pageTitles.parkings;
  }, [parkingsData])
  
  const handleFilterOptionChange = (option) => {
    setFilterOption(option);

    // Filter the parkings based on the selected option
    if (option === 'free') {
      const filtered = parkingsData.filter(parking => parking.tag.includes('Безплатен'));
      setFilteredParkings(filtered);
    } else if (option === 'private') {
      const filtered = parkingsData.filter(parking => parking.tag.includes('Частен / Платен'));
      setFilteredParkings(filtered);
    } else if (option === 'municipal') {
      const filtered = parkingsData.filter(parking => parking.tag.includes('Общински / Платен'));
      setFilteredParkings(filtered);
    } else if (option === 'all') {
      setFilteredParkings(parkingsData)
    } else {
      setFilteredParkings(parkingsData);
    }
  };

  return (
    <ObjectsWrapper>
      <CityObjectHeader parkingsDescriptions={sectionDescriptions}/>
      <CityObjectFilter onFilterOptionChange={handleFilterOptionChange} onFilterParking={filteredParkings}/>
      <CityObjectCard parkingsData={filteredParkings}/>
    </ObjectsWrapper>
  )
};
