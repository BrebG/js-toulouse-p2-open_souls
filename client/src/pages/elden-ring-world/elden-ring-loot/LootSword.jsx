import { useState } from "react";
import { Link } from "react-router-dom";
import "./LootSword.scss";
import useItems from "../../../tools/useItems";
import { useItem } from "../../../contexts/ItemContext";

function LootSword() {
  const [isShown, setIsShown] = useState(false);
  const { weaponStuff } = useItems();
  const { setEquippedItems } = useItem();

  const equipWeapon = (weapon) => {
    setEquippedItems(prev => ({
      ...prev,
      weapon
    }));
  }


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
            <Link to="/boss-fight-godefroy" className="choice-loot" onClick={() => equipWeapon(weaponStuff[1])}>
              <p>{weaponStuff[1]?.name}</p>
            </Link>
            <div
              className="left-img"
              tabIndex={0}
              role="button"
              onClick={() => setIsShown(true)}
              onKeyDown={() => setIsShown(true)}
            >
              <img
                className="left-item-img"
                src={weaponStuff[1]?.image}
                alt={weaponStuff[1]?.name}
              />
            </div>
          </div>
          {isShown && (
            <div className="weapon-stats-left">
              <ul>
                <p>{weaponStuff[1]?.name}</p>
                <li>attack 🗡️ {weaponStuff[1]?.defence[0].amount}</li>
                <li>{weaponStuff[1]?.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default LootSword;
