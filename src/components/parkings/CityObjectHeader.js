import { Link } from 'react-router-dom';
import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';

export const CityObjectHeader = ({parkingsDescriptions}) => {
  const { parkingsData, loading, error } = useCategoryData();
    const sectionInformation = parkingsDescriptions.map((desc) => desc.parkings.description);
    const sectionHeader = parkingsDescriptions.map((desc) => desc.parkings.header);

  return (
    <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> : 
        <>
          <h2>{sectionHeader} ({parkingsData.length} обекта)</h2>
          <p>{sectionInformation} <Link to='https://www.pomorie.bg/zoni-za-parkirane/'> ТУК </Link></p>
        </>
      }
    </SectionHeaderWrapper>
  )
};
