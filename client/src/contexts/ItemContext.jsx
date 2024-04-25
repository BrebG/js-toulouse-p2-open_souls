import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [item, setItem] = useState("");

  const itemValue = useMemo(() => ({ item, setItem }), [item]);

  return (
    <ItemContext.Provider value={itemValue}>{children}</ItemContext.Provider>
  );
}

export function useItem() {
  return useContext(ItemContext);
}

ItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
