import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";
import { useStats } from "../contexts/StatsContext";
import { useName } from "../contexts/NameContext";
import { usePlayerHealth } from "../contexts/PlayerContext";
import { useItem } from "../contexts/ItemContext";

function CombatScreenRadahn() {
  const { name } = useName();
  const { chosenClass } = useStats();
  const { playerHealth, setPlayerHealth } = usePlayerHealth();
  const { equippedItems } = useItem();
  const navigate = useNavigate();

  const sampleEnnemy = {
    id: "17f69dc74fdl0i1v1wz3qrzn19aps8",
    name: "Starscourge Radahn",
    image: "./src/assets/radahn.png",
    region: "Caelid",
    description:
      "General Radahn is cursed ever to wander. Eaten from the inside, by Malenia's scarlet rot, his Wits are long gone. Now he gathers the corpses of former friends and foes alike, gorging on them, like a dog.",
    location: "Caelid",
    drops: {
      0: "70,000 Runes",
      1: "Remembrance of the Starscourge, Radahn's Great Rune",
    },
    healthPoints: "≈25,856",
  };

  const samplePlayer = {
    id: name,
    name: "Player_Name",
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
      receiveDamage(30 - Math.floor(shieldDefence / 10 || 0));
    }, 2000);
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
      navigate("/end-screen");
    }
  }, [ennemyHealth, navigate]);

  useEffect(() => {
    if (playerHealth === 0) {
      navigate("/loosing-page");
    }
  }, [playerHealth, navigate]);

  return (
    <div className="CombatScreenRadahn">
      <div className="TopSection">
        <Ennemy
          ennemyHealth={ennemyHealth}
          image={sampleEnnemy.image}
          ennemyName={sampleEnnemy.name}
          description={sampleEnnemy.description}
        />

        <Player
          image={samplePlayer.image}
          ennemyName={samplePlayer.name}
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

export default CombatScreenRadahn;
