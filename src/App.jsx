import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contactus from "./Pages/Contactus";
import Career from "./Pages/Career";
import Aboutus from "./Pages/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/Services",
    element: (
      <>
        <Services />
      </>
    ),
  },
  {
    path: "/Projects",
    element: (
      <>
        <Projects />
      </>
    ),
  },
  {
    path: "/Contactus",
    element: (
      <>
        <Contactus />
      </>
    ),
  },
  {
    path: "/Career",
    element: (
      <>
        <Career />
      </>
    ),
  },
  {
    path: "/Aboutus",
    element: (
      <>
        <Aboutus />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
