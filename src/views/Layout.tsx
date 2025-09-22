import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <h1>This is the Layout</h1>
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
