import React, { useEffect, useState } from "react";
import "./HoverItem.scss";

function HoverItem() {
  const [itemStats, setItemStats] = useState(1);
  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=0")
      .then((response) => response.json())
      .then((data) => setItemStats(data.data[itemStats]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const itemStatistics = [
    {
      strength: [0, 1, 2, 3, 4],
      dexterity: [0, 1, 2, 3, 4],
    },
  ];

  return (
    <div className="weapon-stats">
      <ul>
        <li>{itemStats.name}</li>
        <li>Strength 🗡️ {itemStatistics[0].strength[3]}</li>
        <li>Dexterity ⚔️ {itemStatistics[0].dexterity[2]}</li>
        <li>{itemStats.description}</li>
      </ul>
      {console.log(itemStatistics.strenght)}
    </div>
  );
}

export default HoverItem;
