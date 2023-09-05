import { SectionHeaderWrapper } from "../UI/SectionHeaderWrapper";
import { useCategoryData } from "../../contexts/CategoriesContext";
import { Loading } from "../UI/Loading/Loading";
import { Error } from "../UI/Error/Error";

export const CityObjectHeader = ({mudDescriptions}) => {
    const { mudData, loading, error } = useCategoryData();
    const sectionInformation = mudDescriptions.map((desc) => desc.mud.description);
    const sectionHeader = mudDescriptions.map((desc) => desc.mud.header);

  return (
      <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> : 
        <>
          <h2>{sectionHeader} ({mudData.length} обекта)</h2>
          <p>{sectionInformation}</p>
        </>
      }
      </SectionHeaderWrapper>
  )
};
