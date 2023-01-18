import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import AboutMe from './routes/about-me';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "/about-me",
      element: <AboutMe />
    },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <RouterProvider router={router} />
      
    </>
  

);
