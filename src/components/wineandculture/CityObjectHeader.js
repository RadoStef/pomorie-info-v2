import { SectionHeaderWrapper } from "../UI/SectionHeaderWrapper";
import { useCategoryData } from "../../contexts/CategoriesContext";
import { Loading } from "../UI/Loading/Loading";
import { Error } from "../UI/Error/Error";
import { OrangeUnderline } from "../UI/Underlines/OrangeUnderline";

export const CityObjectHeader = props => {
    const { cultureData, loading, error } = useCategoryData();
    const sectionInformation = props.cultureDescriptions.map((desc) => desc.culture.description);
    const sectionHeader = props.cultureDescriptions.map((desc) => desc.culture.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className="sections_headers_wrapper">
          <h2>{sectionHeader} ({cultureData.length} обекта)</h2>
          <OrangeUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
