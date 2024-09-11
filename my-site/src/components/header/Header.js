import { Link, Outlet } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";

const Header = () => {
  return(
    <HeaderWrapper>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/aboutme">About Me</Link>"</li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />  
    </HeaderWrapper>
  );
};

export default Header;