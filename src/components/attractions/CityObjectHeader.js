import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';
import { BlueUnderline } from '../UI/Underlines/BlueUnderline';

export const CityObjectHeader = ({ attractionsDescriptions }) => {
  const { attractionsData, loading, error } = useCategoryData();
  const sectionInformation = attractionsDescriptions.map((desc) => desc.attractions.description);
  const sectionHeader = attractionsDescriptions.map((desc) => desc.attractions.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({attractionsData.length} обекта)</h2>
          <BlueUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  );
};
