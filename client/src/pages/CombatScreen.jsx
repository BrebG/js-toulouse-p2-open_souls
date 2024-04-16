import Ennemy from "../components/Ennemy";
import Player from "../components/Player";

function CombatScreen() {
  return (
    <div className="CombatScreen">
      <Ennemy />
      <Player />
    </div>
  );
}

export default CombatScreen;
