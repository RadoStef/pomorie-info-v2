import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';
import { BlueUnderline } from '../UI/Underlines/BlueUnderline';

export const CityObjectHeader = ({hotelsDescriptions}) => {
  const { hotelsData, loading, error } = useCategoryData();
    const sectionInformation = hotelsDescriptions.map((desc) => desc.hotels.description);
    const sectionHeader = hotelsDescriptions.map((desc) => desc.hotels.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({hotelsData.length} обекта)</h2>
          <BlueUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
