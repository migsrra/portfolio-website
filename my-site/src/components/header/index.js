import { Outlet } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";
//nav links gotta turn into hash links, to make all page components seem like on the same page
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="header">
        <HashLink smooth to="/#">Home</HashLink>
        <ul className="nav_links">
          <li>
            <HashLink smooth to="/#experience">Experience</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#aboutme">About Me</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </HeaderWrapper>
  );
};

export default Header;
