import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const NameContext = createContext();

export function NameProvider({ children }) {
  const [name, setName] = useState("");

  const nameValue = useMemo(() => ({ name, setName }), [name]);

  return (
    <NameContext.Provider value={nameValue}>{children}</NameContext.Provider>
  );
}

NameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useName() {
  return useContext(NameContext);
}
