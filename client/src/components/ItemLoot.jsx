import React, { useEffect, useState } from "react";
import "/Users/erwannboissay/WCS/project-2/js-toulouse-p2-open_souls/client/src/components/ItemLoot.scss";

function ItemLoot() {
  const [leftItem, setLeftItem] = useState([]);
  const [leftItemIndex, setLeftItemIndex] = useState(47);

  const [rightItem, setRightItem] = useState([]);
  const [rightItemIndex, setRightItemIndex] = useState(48);

  // item choix de gauche
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=0")
      .then((response) => response.json())
      .then((data) => {
        setLeftItem(data.data[leftItemIndex]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // item choix de droite
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=0")
      .then((response) => response.json())
      .then((data) => {
        setRightItem(data.data[rightItemIndex]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="loots">
      <h1>Loots</h1>
      <section className="loot-choice">
        <div>
          <p>{leftItem.name}</p>
          {/* rajouter le onClick */}
          <img onClick={""} src={leftItem.image} alt={leftItem.name} />
        </div>
        <div>
          <p>{rightItem.name}</p>
          {/* rajouter le onClick */}
          <img onClick={""} src={rightItem.image} alt={rightItem.name} />
        </div>
      </section>
    </div>
  );
}

export default ItemLoot;
