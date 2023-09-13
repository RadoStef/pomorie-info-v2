import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';
import { BlueUnderline } from '../UI/Underlines/BlueUnderline';

export const CityObjectHeader = ({museumsDescriptions}) => {
    const { museumsData, loading, error } = useCategoryData();
    const sectionInformation = museumsDescriptions.map((desc) => desc.museums.description);
    const sectionHeader = museumsDescriptions.map((desc) => desc.museums.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({museumsData.length} обекта)</h2>
          <BlueUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
