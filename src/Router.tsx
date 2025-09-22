import { createBrowserRouter } from "react-router";
import { Layout } from "./views/Layout";
import { AboutMe } from "./views/AboutMe";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/aboutme", element: <AboutMe></AboutMe> }],
  },
]);
