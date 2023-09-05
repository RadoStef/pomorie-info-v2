import { CityObjectHeader } from './CityObjectHeader';
import { ObjectsWrapper } from '../UI/ObjectsWrapper';
import { photographersDescription } from '../mock-data/data';

export const CityObject = () => {
  return (
    <ObjectsWrapper>
      <CityObjectHeader photographersDescriptions={photographersDescription}/>
    </ObjectsWrapper>
  )
};
