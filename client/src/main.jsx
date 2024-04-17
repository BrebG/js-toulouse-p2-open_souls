import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CharSelect from "./pages/CharSelect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/character-selection",
    element: <CharSelect />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
