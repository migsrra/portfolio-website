import ExperienceWrapper from "./styles/ExperienceWrapper";
import Carousel from "../../components/Carousel";
import Content from "../../utils/content";

const Experience = () => {
  return (
    <ExperienceWrapper id="experience">
      <h1>Experience</h1>
      <p className="description">Here, you'll find all sorts of information about my experience as a software and computer engineer.</p>
      <p className="description">Try swiping on the carousel or click on the arrows to explore my experiences. Click on the center item to learn more.</p>
      {<div className = "carousel-wrapper">
        <h2>Work and Clubs</h2>
        <Carousel contentArray={Content.experience}/>
      </div>}
    </ExperienceWrapper> 
  );
};

export default Experience;