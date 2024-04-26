import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";
import { useStats } from "../contexts/StatsContext";
import { useName } from "../contexts/NameContext";

function CombatScreenRadahn() {
  const { name } = useName();
  const { chosenClass } = useStats();
  const navigate = useNavigate();

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
    id: name,
    name: "Player_Name",
    image: chosenClass.image,
  };

  const [ennemyHealth, setEnnemyHealth] = useState(150);

  const dealDamage = (damage) => {
    setEnnemyHealth((prevEnnemyHealth) =>
      Math.max(prevEnnemyHealth - damage, 0)
    );
  };
  useEffect(() => {
    if (ennemyHealth === 0) {
      navigate("/loot-1");
    }
  }, [ennemyHealth, navigate]);

  const [playerHealth, setPlayerHealth] = useState(100);

  const receiveDamage = (damage) => {
    setTimeout(() => {
      setPlayerHealth((prevPlayerHealth) =>
        Math.max(prevPlayerHealth - damage, 0)
      );
    }, 800);
  };

  useEffect(() => {
    if (playerHealth === 0) {
      navigate("/loosing-page");
    }
  }, [playerHealth, navigate]);

  return (
    <div className="CombatScreen">
      <div className="TopSection">
        <Ennemy
          ennemyHealth={ennemyHealth}
          image={sampleEnnemy.image}
          ennemyName={sampleEnnemy.name}
          description={sampleEnnemy.description}
        />

        <Player
          playerHealth={playerHealth}
          image={samplePlayer.image}
          ennemyName={samplePlayer.name}
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
          <Link to="/winning-page" className="app-button">
            Victory
          </Link>
        )}

        <CombatAction dealDamage={dealDamage} receiveDamage={receiveDamage} />
      </div>
    </div>
  );
}

export default CombatScreenRadahn;
