import { Link } from "react-router-dom";
import "./LosingScreen.scss";
import { usePlayerHealth } from "../contexts/PlayerContext";
import { useStats } from "../contexts/StatsContext";

function LosingScreen() {
  const { setPlayerHealth } = usePlayerHealth();
  const { chosenClass } = useStats();

  return (
    <div className="you-died-container">
      <h1 className="you-died-text">YOU DIED!</h1>
      <Link to="/" className="retry-button" onClick={setPlayerHealth(Math.round(100 * (chosenClass.stats.vigor / 10)))}>
        TRY AGAIN
      </Link>
    </div>
  );
}

export default LosingScreen;
