import Lifebar from "./Lifebar";
import "./CombatScreen.scss";

function Player() {
  const samplePlayer = {
    id: "17f69dc74fdl0i1v1wz3qrzn19aps8",
    name: "Player_Name",
    image: "./src/assets/images/confessor.png",
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
    <div className="Player">
      <img src={samplePlayer.image} alt={samplePlayer.name} />
      <div>
        <Lifebar
          healthPoints={samplePlayer.healthPoints}
          PlayerName={samplePlayer.name}
        />
      </div>
    </div>
  );
}

export default Player;
