import { Link } from "react-router-dom";
import "./choicepage.scss";

function ChoiceButtons() {
  return (
    <div className="choicepage">
      <h2 id="choicetitle">Nous sommes ici</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quaerat
        quidem! Quia, ipsam. Porro sint optio, nostrum ipsa temporibus aliquid
        quod nam! Quae voluptatem saepe quas voluptas illo culpa non.
      </p>

      <h3>Faites votre choix</h3>
      <div className="choicebutton">
        {/* Utilisez Link à la place des boutons pour la navigation */}
        <Link to="/choix 1" className="link-button">
          choix 1
        </Link>
        <Link to="/choix 2" className="link-button">
          choix 2
        </Link>
      </div>
    </div>
  );
}

export default ChoiceButtons;
