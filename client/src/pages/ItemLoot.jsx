import { useEffect, useState } from "react";
import "./ItemLoot.scss";
import { Link } from "react-router-dom";
import "./HoverItem.scss";

function ItemLoot() {
  const itemStatistics = [
    {
      strength: [0, 1, 2, 3, 4],
      dexterity: [0, 1, 2, 3, 4],
    },
  ];

  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);

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
      {setLeftItemIndex} {setRightItemIndex}
      <div
        tabIndex={0}
        role="button"
        onMouseLeave={() => setIsShownRight(false) || setIsShownLeft(false)}
        className="loots"
      >
        <h1>Loots</h1>
        <section className="loot-choice">
          <div className="left-loot">
            <Link to="/" className="choice-loot">
              {leftItem.name}
            </Link>
            {/* rajouter le onClick */}
            <div
              className="left-img"
              tabIndex={0}
              role="button"
              onClick={() => setIsShownLeft(true)}
              onKeyDown={() => setIsShownLeft(true)}
            >
              <img src={leftItem.image} alt={leftItem.name} />
            </div>
          </div>
          <div className="right-loot">
            <Link to="/" className="choice-loot">
              {rightItem.name}
            </Link>
            <div
              tabIndex={0}
              className="right-img"
              role="button"
              onClick={() => setIsShownRight(true)}
              onKeyDown={() => setIsShownRight(true)}
            >
              <img src={rightItem.image} alt={rightItem.name} />
            </div>
          </div>
          {isShownLeft && (
            <div className="weapon-stats-left">
              <ul>
                <h2>{leftItem.name}</h2>
                <li>Strength 🗡️ {itemStatistics[0].strength[3]}</li>
                <li>Dexterity ⚔️ {itemStatistics[0].dexterity[2]}</li>
                <li>{leftItem.description}</li>
              </ul>
            </div>
          )}
          {isShownRight && (
            <div className="weapon-stats-right">
              <ul>
                <h2>{rightItem.name}</h2>
                <li>Strength 🗡️ {itemStatistics[0].strength[3]}</li>
                <li>Dexterity ⚔️ {itemStatistics[0].dexterity[2]}</li>
                <li>{rightItem.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ItemLoot;
