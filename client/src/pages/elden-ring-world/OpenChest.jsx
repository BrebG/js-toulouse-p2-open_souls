import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";
import { useName } from "../../contexts/NameContext";

function OpenChest() {
  const { name } = useName();

  return (
    <div className={`choice-page ${EldenTexts[12] && "mimic-choice"}`}>
      <div className="story-text">
        <div className="lore-text">
          <p className="paragraph">{EldenTexts[12].content}</p>
          <p className="paragraph">
            How disappointing {name}, he took the upper hand on you.
          </p>
        </div>
      </div>
      <div className="choice-button">
        <Link to="/loosing-page">Next</Link>
      </div>
    </div>
  );
}

export default OpenChest;
