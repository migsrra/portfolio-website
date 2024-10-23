import LandingPageWrapper from './styles/LandingPageWrapper';
import { NavHashLink } from 'react-router-hash-link';

const LandingPage = () =>{
  return (
    <>
    <LandingPageWrapper id="home">
      <div className="intro-text">
        <h1>Hello! I'm Miguel.</h1>
        <p>Aspiring Software Engineer & UofT CompEng Student.</p>
      </div>
      <NavHashLink smooth to="/#experience">
        <button><span>Explore</span></button>
      </NavHashLink>
    </LandingPageWrapper>
    </>
  );
}

export default LandingPage;
