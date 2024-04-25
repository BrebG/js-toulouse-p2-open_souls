import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemLoot from "./pages/ItemLoot";
import App from "./App";
import CharSelect from "./pages/CharSelect";
import ChoicePage from "./pages/ChoicePage";
import LosingScreen from "./pages/LosingScreen";
import WinningScreen from "./pages/WinningScreen";
import CombatScreen from "./pages/CombatScreen";
import ItemArray from "./tools/ItemArray";
import { NameProvider } from "./contexts/NameContext";
import { StatsProvider } from "./contexts/StatsContext";

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
    element: <ChoicePage />,
  },
  {
    path: "/boss-fight",
    element: <CombatScreen />,
  },
  {
    path: "/loosing-page",
    element: <LosingScreen />,
  },
  {
    path: "/winning-page",
    element: <WinningScreen />,
  },
  {
    path: "/item-loot",
    element: <ItemLoot />,
  },
  {
    path: "/array-item",
    element: <ItemArray />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NameProvider>
    <StatsProvider>
      <RouterProvider router={router} />
    </StatsProvider>
  </NameProvider>
);
