import { NavLink, Outlet } from "react-router";
import { Header } from "../components/Header";
import "../style/layout.css";

export const Layout = () => {
  return (
    <>
      <Header></Header>
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
