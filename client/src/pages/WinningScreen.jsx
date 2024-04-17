import { Link } from "react-router-dom";
import "./endingscreen.scss";

function VictoryPage() {
  return (
    <div className="victory-container">
      <div className="victory-content">
        <h1>Felicitation pour avoir fini l'aventure!</h1>
        <p>Voici votre récompense:</p>
        <p>
          Le code en dessous vous permettra de debloquer un nouveau mode de jeu.
        </p>
        <p>Entrez le dans l'écran d'accueil.</p>
        <h2>MaxiChiBre</h2>

        <Link to="/" className="menu-button">
          Menu
        </Link>
      </div>
    </div>
  );
}

export default VictoryPage;
