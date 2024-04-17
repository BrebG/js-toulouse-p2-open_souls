import Lifebar from "./Lifebar";
import "./CombatScreen.scss";

function Ennemy() {
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

  return (
    <div className="Ennemy">
      <img src={sampleEnnemy.image} alt={sampleEnnemy.name} />
      <div>
        <Lifebar
          healthPoints={sampleEnnemy.healthPoints}
          ennemyName={sampleEnnemy.name}
        />
        <p className="description">{sampleEnnemy.description}</p>
      </div>
    </div>
  );
}

export default Ennemy;
