import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Faq from "./pages/faq/Faq";
import Page_2 from "./pages/page-2/Page_2";
import Page_3 from "./pages/page-3/Page_3";
import Page_4 from "./pages/page-4/Page_4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/about",
    element: <About/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path:"/page-2",
    element: <Page_2/>,
  },
  {
    path: "/page-3",
    element: <Page_3/>,
  },
  {
    path:"/page-4",
    element: <Page_4/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
