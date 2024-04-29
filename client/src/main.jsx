import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CharSelect from "./pages/CharSelect";
import FirstChoicePage from "./pages/elden-ring-world/FirstChoicePage";
import LosingScreen from "./pages/LosingScreen";
import WinningScreen from "./pages/WinningScreen";
import CombatScreenRadahn from "./pages/CombatScreenRadahn";
import CombatScreenGodefrey from "./pages/CombatScreenGodefrey";
import { NameProvider } from "./contexts/NameContext";
import { StatsProvider } from "./contexts/StatsContext";
import OldChest from "./pages/elden-ring-world/OldChest";
import SmallChest from "./pages/elden-ring-world/SmallChest";
import MimicChoice from "./pages/elden-ring-world/MimicChoice";
import OpenChest from "./pages/elden-ring-world/OpenChest";
import LastChoice from "./pages/elden-ring-world/LastChoice";
import Reduvia from "./pages/elden-ring-world/Reduvia";
import SneakPast from "./pages/elden-ring-world/SneakPast";
import LootReduvia from "./pages/elden-ring-world/elden-ring-loot/LootReduvia";
import LootNagakiba from "./pages/elden-ring-world/elden-ring-loot/LootNagakiba";
import LootSword from "./pages/elden-ring-world/elden-ring-loot/LootSword";
import LootGodefrey from "./pages/elden-ring-world/elden-ring-loot/LootGodefrey";
import LootRadahn from "./pages/elden-ring-world/elden-ring-loot/LootRadahn";
import EndScreen from "./pages/elden-ring-world/EndScreen";
import { ItemProvider } from "./contexts/ItemContext";
import { PlayerProvider } from "./contexts/PlayerContext";

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
    element: (
      <PlayerProvider>
        <FirstChoicePage />
      </PlayerProvider>
    ),
  },
  {
    path: "/boss-fight-godefroy",
    element: (
      <PlayerProvider>
        <CombatScreenGodefrey />
      </PlayerProvider>
    ),
  },
  {
    path: "/boss-fight-radahn",
    element: (
      <PlayerProvider>
        <CombatScreenRadahn />
      </PlayerProvider>
    ),
  },
  {
    path: "/loot-godefrey",
    element: <LootGodefrey />,
  },
  {
    path: "/loosing-page",
    element: (
      <PlayerProvider>
        <LosingScreen />
      </PlayerProvider>
    ),
  },
  {
    path: "/winning-page",
    element: <WinningScreen />,
  },
  {
    path: "/old-chest",
    element: <OldChest />,
  },
  {
    path: "/loot-nagakiba",
    element: <LootNagakiba />,
  },
  {
    path: "/small-chest",
    element: <SmallChest />,
  },
  {
    path: "/loot-sword",
    element: <LootSword />,
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
    path: "/loot-reduvia",
    element: <LootReduvia />,
  },
  {
    path: "/sneak-past",
    element: <SneakPast />,
  },
  {
    path: "/end-screen",
    element: <EndScreen />,
  },
  {
    path: "/loot-radahn",
    element: <LootRadahn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ItemProvider>
    <NameProvider>
      <StatsProvider>
        <RouterProvider router={router} />
      </StatsProvider>
    </NameProvider>
  </ItemProvider>
);
