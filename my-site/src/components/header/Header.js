import { NavLink, Outlet } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="header">
        <NavLink to="/">Home</NavLink>
        <ul className="nav_links">
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </HeaderWrapper>
  );
};

export default Header;
