import { CityObjectCard } from './CityObjectCard';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { ObjectsWrapper } from '../UI/ObjectsWrapper';

export const CityObject = () => {
  return (
    <ObjectsWrapper>
      <CityObjectHeader mudDescriptions={sectionDescriptions}/>
      <CityObjectCard/>
    </ObjectsWrapper>
  )
};
