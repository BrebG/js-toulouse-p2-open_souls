import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

export const ItemContext = createContext();

export function Itemprovider({ children }) {
  const [item, setItem] = useState("");

  const itemValue = useMemo(() => ({ item, setItem }), [item]);

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
