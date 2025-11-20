import { NavLink } from "react-router";

export const NavHeader = () => {
  return (
    <>
      <ul className="header-navigation">
        <li>
          <NavLink to="/start">Start</NavLink>
        </li>
        <li>
          <NavLink to="/aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/artgallery">Amina art gallery</NavLink>
        </li>
      </ul>
    </>
  );
};
