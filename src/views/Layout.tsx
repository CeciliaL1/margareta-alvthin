import { NavLink, Outlet } from "react-router";

import "../style/layout.css";
import { HeaderSlideShow } from "../components/HeaderSlideShow";

export const Layout = () => {
  return (
    <>
      <HeaderSlideShow></HeaderSlideShow>
      <NavLink to="/Start">Start</NavLink>
      <NavLink to="/aboutme">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/artgallery">Amina art gallery</NavLink>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
