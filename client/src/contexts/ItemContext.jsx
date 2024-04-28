import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [item, setItem] = useState("");
  const [equippedItems, setEquippedItems] = useState({
    weapon: {},
    shield: {}
  });

  const itemValue = useMemo(() => ({ item, setItem, equippedItems, setEquippedItems }), [item, equippedItems]);

  return (
    <ItemContext.Provider value={itemValue}>{children}</ItemContext.Provider>
  );
}

ItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useItem() {
  return useContext(ItemContext);
}
