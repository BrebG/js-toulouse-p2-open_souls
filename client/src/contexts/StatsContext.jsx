import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const StatContext = createContext();

export function StatsProvider({ children }) {

  const [chosenClass, setChosenClass] = useState([]);

  const statsValue = useMemo(
    () => ({
      chosenClass,
      setChosenClass,
    }),
    [chosenClass]
  );

  return (
    <StatContext.Provider value={statsValue}>{children}</StatContext.Provider>
  );
}
StatsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export function useStats() {
  return useContext(StatContext);
}
