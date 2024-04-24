import { Link } from "react-router-dom";
import "./losingscreen.scss";

function LosingScreen() {
  const soundPath = "./src/assets/sound/sword-button.wav";

  const audio = new Audio(soundPath);

  const playSound = () => {
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
