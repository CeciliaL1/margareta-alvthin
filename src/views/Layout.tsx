import { Outlet } from "react-router";

import "../style/layout.scss";
import { HeaderSlideShow } from "../components/HeaderSlideShow";
import { NavHeader } from "../components/NavHeader";

export const Layout = () => {
  return (
    <>
      <HeaderSlideShow></HeaderSlideShow>
      <NavHeader></NavHeader>
      <main>
        <Outlet></Outlet>
        <div style={{ height: "500px" }}></div>
      </main>
    </>
  );
};
