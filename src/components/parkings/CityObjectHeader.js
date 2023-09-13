import { Link } from 'react-router-dom';
import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';
import { OrangeUnderline } from '../UI/Underlines/OrangeUnderline';

export const CityObjectHeader = ({parkingsDescriptions}) => {
  const { parkingsData, loading, error } = useCategoryData();
    const sectionInformation = parkingsDescriptions.map((desc) => desc.parkings.description);
    const sectionHeader = parkingsDescriptions.map((desc) => desc.parkings.header);

  return (
    <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({parkingsData.length} обекта)</h2>
          <OrangeUnderline/>
          <p>{sectionInformation} <Link to='https://www.pomorie.bg/zoni-za-parkirane/'> ТУК </Link></p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
