import Ennemy from "../components/Ennemy";
import Player from "../components/Player";
import CombatAction from "../components/CombatAction";
import CombatLog from "../components/CombatLog";

function CombatScreen() {
  return (
    <div className="CombatScreen">
      <Ennemy />
      <Player />
      <div className="bottomSection">
        <CombatLog />
        <CombatAction />
      </div>
    </div>
  );
}

export default CombatScreen;
