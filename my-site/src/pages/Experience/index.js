import ExperienceWrapper from "./styles/ExperienceWrapper";
import Carousel from "../../components/Carousel";
import Content from "../../utils/content";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <h1>Experience</h1>
      <p>Here, you'll find all sorts of information about my experience as a software engineer.</p>
      <p>Try swiping on the carousel or click on the arrows to explore my experiences. Click on the center item to learn more.</p>
      <div className = "carousel-wrapper">
        <h2>Work and Clubs</h2>
        <Carousel contentArray={Content.experience}/>
      </div>
    </ExperienceWrapper> 
  );
};

export default Experience;