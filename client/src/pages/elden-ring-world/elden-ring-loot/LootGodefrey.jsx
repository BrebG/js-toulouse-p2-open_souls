import { useState } from "react";
import { Link } from "react-router-dom";
import "./LootGodefrey.scss";
import useItems from "../../../tools/useItems";
import "../../../components/HoverItem.scss";

function LootGodefrey() {
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const { shieldStuff } = useItems();

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
              <p>{shieldStuff[0]?.name}</p>
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
                src={shieldStuff[0]?.image}
                alt={shieldStuff[0]?.name}
              />
            </div>
          </div>
          <div className="right-loot">
            <Link to="/mimic-choice" className="choice-loot">
              <p>{shieldStuff[1]?.name}</p>
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
                src={shieldStuff[1]?.image}
                alt={shieldStuff[1]?.name}
              />
            </div>
          </div>
          {isShownLeft && (
            <div className="weapon-stats-left">
              <ul>
                <p>{shieldStuff[0]?.name}</p>
                <li>defence 🗡️ {shieldStuff[0]?.defence[0].amount}</li>
                <li>{shieldStuff[0]?.description}</li>
              </ul>
            </div>
          )}
          {isShownRight && (
            <div className="weapon-stats-right">
              <ul>
                <p>{shieldStuff[1]?.name}</p>
                <li>defence 🗡️ {shieldStuff[0]?.defence[0].amount}</li>
                <li>{shieldStuff[0]?.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default LootGodefrey;
