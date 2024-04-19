import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CharSelect from "./pages/CharSelect";
import ChoiceButtons from "./components/ChoiceBtn";
import YouDiedPage from "./pages/LosingScreen";
import VictoryPage from "./pages/WinningScreen";
import CombatScreen from "./pages/CombatScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/character-selection",
    element: <CharSelect />,
  },
  {
    path: "/choice-selection",
    element: <ChoiceButtons />,
  },
  {
    path: "/boss-fight",
    element: <CombatScreen />,
  },
  {
    path: "/loosing-page",
    element: <YouDiedPage />,
  },
  {
    path: "/winning-page",
    element: <VictoryPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
