import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Inicio from './Inicio.jsx';
import { Cards } from './Cards.jsx';
import { Calc } from './Calc.jsx';
import { MapZap } from './MapZap.jsx';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/calc",
    element: <Calc />,
  },
  {
    path: "/MapZap",
    element: <MapZap />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)