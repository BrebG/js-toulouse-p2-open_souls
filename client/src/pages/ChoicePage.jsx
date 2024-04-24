import { Link } from "react-router-dom";
import "./ChoicePage.scss";

function ChoicePage() {
  return (
    <div className="choice-page">
      <div className="story-text">
        <div className="lore-text">
          <p id="choice-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            quaerat quidem! Quia, ipsam. Porro sint optio, nostrum ipsa
            temporibus aliquid quod nam! Quae voluptatem saepe quas voluptas
            illo culpa non.
          </p>
        </div>
      </div>
      <h3>Make your choice</h3>
      <div className="choice-button">
        <Link to="/loosing-page" className="link-button">
          Choice 1
        </Link>
        <Link to="/boss-fight" className="link-button">
          choice 2
        </Link>
      </div>
    </div>
  );
}

export default ChoicePage;
