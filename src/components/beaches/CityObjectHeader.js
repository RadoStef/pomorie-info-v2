import { SectionHeaderWrapper } from "../UI/SectionHeaderWrapper";
import { useCategoryData } from "../../contexts/CategoriesContext";
import { Loading } from "../UI/Loading/Loading";
import { Error } from "../UI/Error/Error";
import { OrangeUnderline } from "../UI/Underlines/OrangeUnderline";

export const CityObjectHeader = ({beachesDescriptions}) => {
  const {beachesData, loading, error } = useCategoryData(); 
    const sectionInformation = beachesDescriptions.map((desc) => desc.beaches.description);
    const sectionHeader = beachesDescriptions.map((desc) => desc.beaches.header);

  return (
    <SectionHeaderWrapper>
        {loading ? <Loading/> : error ? <Error error={error}/> :
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({beachesData.length} обекта)</h2>
          <OrangeUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
