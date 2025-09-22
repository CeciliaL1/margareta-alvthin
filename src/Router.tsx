import { createBrowserRouter } from "react-router";
import { Layout } from "./views/Layout";
import { AboutMe } from "./views/AboutMe";
import { ArtGallery } from "./views/ArtGallery";
import { Contact } from "./views/Contact";
import { Portfolio } from "./views/Portfolio";
import { Start } from "./views/Start";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/start", element: <Start></Start> },
      { path: "/aboutme", element: <AboutMe></AboutMe> },
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/artgallery", element: <ArtGallery></ArtGallery> },
    ],
  },
]);
