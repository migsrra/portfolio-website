import ExperienceWrapper from "./styles/ExperienceWrapper";
import Carousel from "../../components/Carousel";
import Content from "../../utils/content";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <h1>Experience</h1>
      <h3>Here, you'll find all sorts of information about my experience as a software engineer.</h3>
      <div className = "carousel-wrapper">
        <h2>Work and Clubs</h2>
        <Carousel contentArray={Content.experience}/>
      </div>
    </ExperienceWrapper> 
  );
};

export default Experience;