import LandingPageWrapper from './styles/LandingPageWrapper';
import { NavLink } from 'react-router-dom';

const LandingPage = () =>{
  return (
    <>
    <LandingPageWrapper>
      <div className="intro-text">
        <h1>Hello! I'm Miguel.</h1>
        <p>Aspiring Software Engineer & UofT CompEng Student.</p>
      </div>
      <NavLink to="/experience">
        <button><span>Explore</span></button>
      </NavLink>
    </LandingPageWrapper>
    </>
  );
}

export default LandingPage;
