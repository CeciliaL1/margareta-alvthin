import "./App.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
