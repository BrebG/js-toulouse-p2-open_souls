import { Link } from "react-router-dom";
import "./choicepage.scss";

function ChoiceButtons() {
  return (
    <div className="choicepage">
      <h2 id="choicetitle">Nous sommes ici</h2>
      <p id="choicetext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quaerat
        quidem! Quia, ipsam. Porro sint optio, nostrum ipsa temporibus aliquid
        quod nam! Quae voluptatem saepe quas voluptas illo culpa non.
      </p>

      <h3>Faites votre choix</h3>
      <div className="choicebutton">
        <Link to="/boss-fight" className="link-button">
          choix 1
        </Link>
        <Link to="/boss-fight" className="link-button">
          choix 2
        </Link>
      </div>
    </div>
  );
}

export default ChoiceButtons;
