import { SectionHeaderWrapper } from '../UI/SectionHeaderWrapper';
import { useCategoryData } from '../../contexts/CategoriesContext';
import { Loading } from '../UI/Loading/Loading';
import { Error } from '../UI/Error/Error';

export const CityObjectHeader = ({museumsDescriptions}) => {
    const { museumsData, loading, error } = useCategoryData();
    const sectionInformation = museumsDescriptions.map((desc) => desc.museums.description);
    const sectionHeader = museumsDescriptions.map((desc) => desc.museums.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <>
          <h2>{sectionHeader} ({museumsData.length} обекта)</h2>
          <p>{sectionInformation}</p>
        </>
      }
    </SectionHeaderWrapper>
  )
};
