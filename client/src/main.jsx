import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemLoot from "./pages/ItemLoot";

import App from "./App";
import CharSelect from "./pages/CharSelect";
import FirstChoicePage from "./pages/elden-ring-world/FirstChoicePage";
import LosingScreen from "./pages/LosingScreen";
import WinningScreen from "./pages/WinningScreen";
import CombatScreen from "./pages/CombatScreen";
import { NameProvider } from "./contexts/NameContext";
import OldChest from "./pages/elden-ring-world/OldChest";
import SmallChest from "./pages/elden-ring-world/SmallChest";
import MimicChoice from "./pages/elden-ring-world/MimicChoice";
import OpenChest from "./pages/elden-ring-world/OpenChest";
import LastChoice from "./pages/elden-ring-world/LastChoice";
import Reduvia from "./pages/elden-ring-world/Reduvia";
import SneakPast from "./pages/elden-ring-world/SneakPast";

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
    element: <FirstChoicePage />,
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
    path: "/old-chest",
    element: <OldChest />,
  },
  {
    path: "/small-chest",
    element: <SmallChest />,
  },
  {
    path: "/mimic-choice",
    element: <MimicChoice />,
  },
  {
    path: "/open-chest",
    element: <OpenChest />,
  },
  {
    path: "/last-choice",
    element: <LastChoice />,
  },
  {
    path: "/reduvia",
    element: <Reduvia />,
  },
  {
    path: "/sneak-past",
    element: <SneakPast />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NameProvider>
    <RouterProvider router={router} />
  </NameProvider>
);
