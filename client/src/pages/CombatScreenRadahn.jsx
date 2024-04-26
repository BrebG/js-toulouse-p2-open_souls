import { useState } from "react";
import { Link } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";

function CombatScreenRadahn() {
  const sampleEnnemy = {
    id: "17f69dc74fdl0i1v1wz3qrzn19aps8",
    name: "Starscourge Radahn",
    image: "./src/assets/images/radahn.png",
    region: "Caelid",
    description:
      "General Radahn is cursed ever to wander. Eaten from the inside, by Malenia's scarlet rot, his Wits are long gone. Now he gathers the corpses of former friends and foes alike, gorging on them, like a dog.",
    location: "Caelid",
    drops: {
      0: "70,000 Runes",
      1: "Remembrance of the Starscourge, Radahn's Great Rune",
    },
    healthPoints: "≈25,856",
    background: "./src/assets/images/radahnBg.jpg",
  };

  const samplePlayer = {
    id: "player_name",
    name: "Player_Name",
    image: "./src/assets/images/confessor.png",
  };

  const [ennemyHealth, setEnnemyHealth] = useState(150);

  const dealDamage = (damage) => {
    setEnnemyHealth((prevEnnemyHealth) =>
      Math.max(prevEnnemyHealth - damage, 0)
    );
  };
  const [playerHealth, setPlayerHealth] = useState(100);
  const receiveDamage = (damage) => {
    setTimeout(() => {
      setPlayerHealth((prevPlayerHealth) =>
        Math.max(prevPlayerHealth - damage, 0)
      );
    }, 800);
  };

  return (
    <div className="CombatScreen">
      <div className="TopSection">
        <Ennemy
          EnnemyHealth={ennemyHealth}
          image={sampleEnnemy.image}
          EnnemyName={sampleEnnemy.name}
          description={sampleEnnemy.description}
        />

        <Player
          PlayerHealth={playerHealth}
          image={samplePlayer.image}
          EnnemyName={samplePlayer.name}
          description={samplePlayer.description}
          receiveDamage={receiveDamage}
        />
      </div>

      <div className="BottomSection">
        {ennemyHealth !== 0 ? (
          <Link to="/loosing-page" className="app-button">
            Defeat
          </Link>
        ) : (
          <Link to="/loot-1" className="app-button">
            Victory
          </Link>
        )}

        <CombatAction dealDamage={dealDamage} receiveDamage={receiveDamage} />
      </div>
    </div>
  );
}

export default CombatScreenRadahn;
