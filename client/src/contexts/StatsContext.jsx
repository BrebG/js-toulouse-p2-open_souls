import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from "react";

export const statContext = createContext();

export function StatsProvider({ children }) {
  const [classes, setClasses] = useState([]);

  const statsValue = useMemo(() => ({
      classes,
      setClasses,
    }), [classes]);

  return (
    <statContext.Provider value={statsValue}>{children}</statContext.Provider>
  );
}
StatsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export function useStats() {
  return useContext(statContext);
}
