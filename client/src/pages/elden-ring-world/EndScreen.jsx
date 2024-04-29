import { Link } from "react-router-dom";
import "./EndScreen.scss";

function EndScreen() {
  return (
    <div className="end-screen">
      <div className="demo-text">
        <p>Thank you for playing our free demo.</p>
        <p>
          To access the world of Monster Hunter World, pre-order the full game
          available very soon.
        </p>
      </div>
      <Link className="end-screen-button" to="/winning-page">
        Next
      </Link>
    </div>
  );
}

export default EndScreen;
