import { useState } from "react";
import { Link } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";

function CombatScreenGodefrey() {
  const sampleEnnemy = {
    id: "17f69a82a2el0i1uta5rxvqv53g7e",
    name: "Godfrey, First Elden Lord (hoarah Loux)",
    image: "./src/assets/images/ggodefry-boss.png",
    region: "Altus Plateau",
    description:
      "I've given thee courtesy enough. Now I fight as Hoarah Loux. Warrior!",
    location: "Leyndell, Capital of Ash",
    drops: {
      0: "300,000  Runes",
      1: "Remembrance of Hoarah Loux",
    },
    healthPoints: "≈2200",
    background: "./src/assets/images/elden-text-arena-id-7-8-9.jpg",
  };

  const samplePlayer = {
    id: "player_name",
    name: "Player_Name",
    image: "./src/assets/images/confessor.png",
  };

  const [EnnemyHealth, setEnnemyHealth] = useState(150);

  const dealDamage = (damage) => {
    setEnnemyHealth((prevEnnemyHealth) =>
      Math.max(prevEnnemyHealth - damage, 0)
    );
  };
  const [PlayerHealth, setPlayerHealth] = useState(100);
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
          EnnemyHealth={EnnemyHealth}
          image={sampleEnnemy.image}
          EnnemyName={sampleEnnemy.name}
          description={sampleEnnemy.description}
        />

        <Player
          PlayerHealth={PlayerHealth}
          image={samplePlayer.image}
          EnnemyName={samplePlayer.name}
          description={samplePlayer.description}
          receiveDamage={receiveDamage}
        />
      </div>

      <div className="BottomSection">
        {EnnemyHealth !== 0 ? (
          <Link to="/loosing-page" className="app-button">
            Defeat
          </Link>
        ) : (
          <Link to="/item-loot" className="app-button">
            Victory
          </Link>
        )}

        <CombatAction dealDamage={dealDamage} receiveDamage={receiveDamage} />
      </div>
    </div>
  );
}

export default CombatScreenGodefrey;
