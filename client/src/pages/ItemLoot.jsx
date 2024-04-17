import React, { useEffect, useState } from "react";
import "./ItemLoot.scss";
import { Link } from "react-router-dom";

function ItemLoot() {
  const [leftItem, setLeftItem] = useState([]);
  const [leftItemIndex, setLeftItemIndex] = useState(47);

  const [rightItem, setRightItem] = useState([]);
  const [rightItemIndex, setRightItemIndex] = useState(48);

  // item choix de gauche
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=0")
      .then((response) => response.json())
      .then((data) => setLeftItem(data.data[leftItemIndex]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // item choix de droite
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=0")
      .then((response) => response.json())
      .then((data) => setRightItem(data.data[rightItemIndex]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="loot-background">
      <div className="loots">
        <h1>Loots</h1>
        <section className="loot-choice">
          <div className="left-loot">
            <Link className="choice-loot">{leftItem.name}</Link>
            {/* rajouter le onClick */}
            <img onClick={""} src={leftItem.image} alt={leftItem.name} />
          </div>
          <div className="right-loot">
            <Link className="choice-loot">{rightItem.name}</Link>
            {/* rajouter le onClick */}
            <img onClick={""} src={rightItem.image} alt={rightItem.name} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ItemLoot;
