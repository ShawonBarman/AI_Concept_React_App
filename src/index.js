import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import AboutAI from './pages/AboutAI';
import Application from './pages/Application';
import FutureofAI from './pages/FutureofAI';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogsAI from './pages/BlogsAI';
import BlogDetails from './pages/BlogDetails';
import Errors404 from './pages/Errors404';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRouters = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about-ai",
      element: <AboutAI />,
    },
    {
      path: "applications",
      element: <Application />,
    },
    {
      path: "future-of-ai",
      element: <FutureofAI />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "blogs-ai",
      element: <BlogsAI />,
    },
    {
      path: "blogs-ai/:id",
      element: <BlogDetails />
    },
    {
      path: "*",
      element: <Errors404 />
    }
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRouters} />
  </React.StrictMode>
);
