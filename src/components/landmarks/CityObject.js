import { useEffect } from 'react';
import { CityObjectCard } from './CityObjectCard';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { ObjectsWrapper } from '../UI/ObjectsWrapper';
import { pageTitles } from '../mock-data/data';

export const CityObject = () => {
  useEffect(() => {
    document.title =  pageTitles.landmarks;
  }, [])
  
  return (
    <ObjectsWrapper>
      <CityObjectHeader landmarksDescriptions={sectionDescriptions}/>
      <CityObjectCard />
    </ObjectsWrapper>
  )
};
