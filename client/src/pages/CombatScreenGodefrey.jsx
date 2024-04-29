import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";
import { useStats } from "../contexts/StatsContext";
import { useName } from "../contexts/NameContext";
import { usePlayerHealth } from "../contexts/PlayerContext";
import { useItem } from "../contexts/ItemContext";

function CombatScreenGodefrey() {
  const { name } = useName();
  const { chosenClass } = useStats();
  const { playerHealth, setPlayerHealth } = usePlayerHealth();
  const { equippedItems } = useItem();
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
  const receiveDamage = (damage) => {
    const playerImage = document.querySelector(".Player img");
    function shakePlayer() {
      playerImage.classList.add("shaking");
      setTimeout(() => {
        playerImage.classList.remove("shaking");
      }, 500);
    }

    setPlayerHealth((prevPlayerHealth) =>
      Math.max(prevPlayerHealth - damage, 0)
    );
    shakePlayer();
  };

  const [damageInterval, setDamageInterval] = useState(null);

  useEffect(() => {
    const shieldDefence = equippedItems.shield.defence?.[0].amount;
    const interval = setInterval(() => {
      receiveDamage(20 - Math.floor(shieldDefence / 10 || 0));
    }, 2500);
    setDamageInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const cancelDamage = () => {
    clearInterval(damageInterval);
    setDamageInterval(null);
  };

  const [ennemyHealth, setEnnemyHealth] = useState(Math.floor(150));

  const dealDamage = (damage) => {
    setEnnemyHealth((prevEnnemyHealth) =>
      Math.max(prevEnnemyHealth - damage, 0)
    );
  };
  useEffect(() => {
    if (ennemyHealth === 0) {
      cancelDamage();
      navigate("/loot-godefrey");
    }
  }, [ennemyHealth, navigate]);

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
          image={samplePlayer.image}
          playerName={samplePlayer.name}
          description={samplePlayer.description}
          receiveDamage={receiveDamage}
        />
      </div>

      <div className="BottomSection">
        <CombatAction dealDamage={dealDamage} />
      </div>
    </div>
  );
}

export default CombatScreenGodefrey;
