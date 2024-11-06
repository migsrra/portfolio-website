import LandingPageWrapper from './styles/LandingPageWrapper';
import { HashLink } from 'react-router-hash-link';
import Marquee from 'react-fast-marquee';
import Content from '../../utils/content';


const LandingPage = () =>{


  return (
    <>
    <LandingPageWrapper id="home">
      <div className="intro-text">
        <h1>Hello! I'm Miguel.</h1>
        <p>Aspiring Software Engineer & UofT CompEng Student.</p>
      </div>
      <HashLink smooth to="/#experience">
        <button><span>Explore</span></button>
      </HashLink>
      <Marquee className='marquee' speed={40}>
        {
          Content.technologies.map((tech, i) => (
            <img src={require("../../resources/tech-stack-images/" + tech.logoLocation)} draggable="false" height = "50px" alt="logo" key={i}/>
          ))
        }
      </Marquee>
    </LandingPageWrapper>
    </>
  );
}

export default LandingPage;
