import { useState } from "react";
import { Link } from "react-router-dom";
import "./LootRadahn.scss";
import useItems from "../../../tools/useItems";
import "../../../components/HoverItem.scss";

function LootRadahn() {
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const { weaponStuff } = useItems();

  return (
    <div className="loot-background">
      <div
        tabIndex={0}
        role="button"
        onMouseLeave={() => setIsShownRight(false) || setIsShownLeft(false)}
        className="loots"
      >
        <h1>Loots</h1>
        <section className="loot-choice">
          <div className="left-loot">
            <Link to="/mimic-choice" className="choice-loot">
              <p>{weaponStuff[3]?.name}</p>
            </Link>
            {/* rajouter le onClick */}
            <div
              className="left-img"
              tabIndex={0}
              role="button"
              onClick={() => setIsShownLeft(true)}
              onKeyDown={() => setIsShownLeft(true)}
            >
              <img
                className="left-item-img"
                src={weaponStuff[3]?.image}
                alt={weaponStuff[3]?.name}
              />
            </div>
          </div>
          <div className="right-loot">
            <Link to="/mimic-choice" className="choice-loot">
              <p>{weaponStuff[4]?.name}</p>
            </Link>
            <div
              tabIndex={0}
              className="right-img"
              role="button"
              onClick={() => setIsShownRight(true)}
              onKeyDown={() => setIsShownRight(true)}
            >
              <img
                className="right-item-img"
                src={weaponStuff[4]?.image}
                alt={weaponStuff[4]?.name}
              />
            </div>
          </div>
          {isShownLeft && (
            <div className="weapon-stats-left">
              <ul>
                <p>{weaponStuff[3]?.name}</p>
                <li>dexterity 🗡️ {weaponStuff[3]?.attack[0].amount}</li>
                <li>{weaponStuff[3]?.description}</li>
              </ul>
            </div>
          )}
          {isShownRight && (
            <div className="weapon-stats-right">
              <ul>
                <p>{weaponStuff[4]?.name}</p>
                <li>attack 🗡️ {weaponStuff[4]?.attack[0].amount}</li>
                <li>{weaponStuff[4]?.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default LootRadahn;
