import { Link } from "react-router-dom";
import "./LosingScreen.scss";
import { usePlayerHealth } from "../contexts/PlayerContext";

function LosingScreen() {
  const { setPlayerHealth } = usePlayerHealth();
  const soundPath = "./src/assets/sound/sword-button.wav";

  const audio = new Audio(soundPath);

  const playSound = () => {
    setPlayerHealth(100);
    audio.play();
  };

  return (
    <div className="you-died-container">
      <h1 className="you-died-text">YOU DIED!</h1>
      <Link to="/" className="retry-button" onClick={playSound}>
        TRY AGAIN
      </Link>
    </div>
  );
}

export default LosingScreen;
