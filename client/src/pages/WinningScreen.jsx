import { Link } from "react-router-dom";
import "./LosingScreen";
import "./WinningScreen.scss";
import { useName } from "../contexts/NameContext";

function WinningScreen() {
  const { name } = useName();
  return (
    <div className="victory-container">
      <div className="victory-content">
        <h1>Congratulations {name} you finished your quest!</h1>
      </div>
      <Link to="/" className="menu-button">
        Menu
      </Link>
    </div>
  );
}

export default WinningScreen;
