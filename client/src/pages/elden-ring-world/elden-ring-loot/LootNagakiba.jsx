import { useState } from "react";
import { Link } from "react-router-dom";
import "./LootNagakiba.scss";
import useItems from "../../../tools/useItems";

function LootNagakiba() {
  const [isShown, setIsShown] = useState(false);
  const { weaponStuff } = useItems();

  return (
    <div className="loot-background">
      <div
        tabIndex={0}
        role="button"
        onMouseLeave={() => setIsShown(false) || setIsShown(false)}
        className="loots"
      >
        <h1>Loots</h1>
        <section className="loot-choice">
          <div className="left-loot">
            <Link to="/boss-fight-godefroy" className="choice-loot">
              <p>{weaponStuff[0]?.name}</p>
            </Link>
            {/* rajouter le onClick */}
            <div
              className="left-img"
              tabIndex={0}
              role="button"
              onClick={() => setIsShown(true)}
              onKeyDown={() => setIsShown(true)}
            >
              <img
                className="left-item-img"
                src={weaponStuff[0]?.image}
                alt={weaponStuff[0]?.name}
              />
            </div>
          </div>
          {isShown && (
            <div className="weapon-stats-left">
              <ul>
                <p>{weaponStuff[0]?.name}</p>
                <li>attack 🗡️ {weaponStuff[0]?.defence[0].amount}</li>
                <li>{weaponStuff[0]?.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default LootNagakiba;
