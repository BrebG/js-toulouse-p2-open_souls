import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";
import { useStats } from "../contexts/StatsContext";
import { useName } from "../contexts/NameContext";

function CombatScreenGodefrey() {
  const { name } = useName();
  const { chosenClass } = useStats();
  const navigate = useNavigate();

  const sampleEnnemy = {
    id: "17f69a82a2el0i1uta5rxvqv53g7e",
    name: "Godfrey, First Elden Lord (hoarah Loux)",
    image: "./src/assets/images/godefrey.png",
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
    name,
    image: chosenClass.image,
  };

  const [EnnemyHealth, setEnnemyHealth] = useState(150);

  const dealDamage = (damage) => {
    setEnnemyHealth((prevEnnemyHealth) =>
      Math.max(prevEnnemyHealth - damage, 0)
    );
  };
  useEffect(() => {
    if (EnnemyHealth === 0) {
      navigate("/loot-1");
    }
  }, [EnnemyHealth, navigate]);

  const [PlayerHealth, setPlayerHealth] = useState(100);
  const receiveDamage = (damage) => {
    setTimeout(() => {
      setPlayerHealth((prevPlayerHealth) =>
        Math.max(prevPlayerHealth - damage, 0)
      );
    }, 800);
  };
  useEffect(() => {
    if (PlayerHealth === 0) {
      navigate("/loosing-page");
    }
  }, [PlayerHealth, navigate]);

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
          PlayerName={samplePlayer.name}
          description={samplePlayer.description}
          receiveDamage={receiveDamage}
        />
      </div>

      <div className="BottomSection">
        <CombatAction dealDamage={dealDamage} receiveDamage={receiveDamage} />
      </div>
    </div>
  );
}

export default CombatScreenGodefrey;
