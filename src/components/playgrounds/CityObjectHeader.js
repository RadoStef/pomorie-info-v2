import { SectionHeaderWrapper } from "../UI/SectionHeaderWrapper";
import { useCategoryData } from "../../contexts/CategoriesContext";
import { Loading } from "../UI/Loading/Loading";
import { Error } from "../UI/Error/Error";
import { GreenUnderline } from "../UI/Underlines/GreenUnderline";

export const CityObjectHeader = ({playgroundsDescriptions}) => {
    const { playgroundsData, loading, error} = useCategoryData();
    const sectionInformation = playgroundsDescriptions.map((desc) => desc.playgrounds.description);
    const sectionHeader = playgroundsDescriptions.map((desc) => desc.playgrounds.header);

  return (
    <SectionHeaderWrapper>
      {loading ? <Loading/> : error ? <Error error={error}/> : 
        <div className='sections_headers_wrapper'>
          <h2>{sectionHeader} ({playgroundsData.length} обекта)</h2>
          <GreenUnderline/>
          <p>{sectionInformation}</p>
        </div>
      }
    </SectionHeaderWrapper>
  )
};
