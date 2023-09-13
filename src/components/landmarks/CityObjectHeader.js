import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';
import { GreenUnderline } from '../UI/Underlines/GreenUnderline';

export const CityObjectHeader = ({landmarksDescriptions}) => {
    const { landmarksData, loading, error } = useCategoryData();
    const sectionInformation = landmarksDescriptions.map((desc) => desc.landmarks.description);
    const sectionHeader = landmarksDescriptions.map((desc) => desc.landmarks.header);

  return (
    <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({landmarksData.length} обекта)</h2>
          <GreenUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
