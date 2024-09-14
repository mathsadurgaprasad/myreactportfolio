import logo from "./logo.svg";
import "./App.css";
import Topterminal from "./features/topterminalsection/topterminal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./features/about/about";
import Contact from "./features/contact/contact";
import Project from "./features/projects/projects";
import Home from "./features/home/home";
import AboutContent from "./features/AboutContent/aboutcontent";
import Skills from "./features/skills/skills.js";

const router = createBrowserRouter([
  {
    element: <About />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutContent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
