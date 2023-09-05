import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';

export const CityObjectHeader = ({landmarksDescriptions}) => {
    const { landmarksData, loading, error } = useCategoryData();
    const sectionInformation = landmarksDescriptions.map((desc) => desc.landmarks.description);
    const sectionHeader = landmarksDescriptions.map((desc) => desc.landmarks.header);

  return (
    <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> : 
        <>
          <h2>{sectionHeader} ({landmarksData.length} обекта)</h2>
          <p>{sectionInformation}</p>
        </>
      }
    </SectionHeaderWrapper>
  )
};
