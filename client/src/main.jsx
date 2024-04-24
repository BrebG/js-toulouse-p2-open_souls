import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemLoot from "./pages/ItemLoot";

import App from "./App";
import CharSelect from "./pages/CharSelect";
import ChoiceButtons from "./pages/ChoicePage";
import YouDiedPage from "./pages/LosingScreen";
import VictoryPage from "./pages/WinningScreen";
import CombatScreen from "./pages/CombatScreen";
import { StatsProvider } from "./context/statscontext";

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
  {
    path: "/item-loot",
    element: <ItemLoot />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StatsProvider>
    <RouterProvider router={router} />
  </StatsProvider>
);
