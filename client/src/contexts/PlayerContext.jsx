import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";
import { useStats } from "./StatsContext";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const { chosenClass } = useStats();

  const [playerHealth, setPlayerHealth] = useState(
    Math.round(100 * (chosenClass.stats.vigor / 10))
  );

  const playerHealthValue = useMemo(
    () => ({
      playerHealth,
      setPlayerHealth,
    }),
    [playerHealth]
  );

  return (
    <PlayerContext.Provider value={playerHealthValue}>
      {children}
    </PlayerContext.Provider>
  );
}
PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function usePlayerHealth() {
  return useContext(PlayerContext);
}
