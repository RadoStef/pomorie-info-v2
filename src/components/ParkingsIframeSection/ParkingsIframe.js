import { HomepageSectionsCard } from '../UI/HomepageSectionsCard'

export const ParkingsIframe = () => {
    return (
      <HomepageSectionsCard>
        <h2>Свободни места на общинските паркинги в момента:</h2>
        <iframe
          src="https://www.pomorie.bg/zoni-za-parkirane/?fbclid=IwAR0021d-99AaLiFWpQasRokfDRs0wJtGfsNhWz_B2EqGk4LPhFwzjoATp04"
          style={{
            width: '90%',
            height: '950px',
            margin: '20px 0',
            border: '1px solid #222',   
          }}
          title="Free parking spots table"
          scrolling="no"
        ></iframe>
      </HomepageSectionsCard>
    );
};