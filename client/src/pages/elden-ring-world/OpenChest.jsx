import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function OpenChest() {
  return (
    <div className="choice-page">
      <div className="story-text">
        <div className="lore-text">
          <p>{EldenTexts[12].content}</p>
        </div>
      </div>
      <div className="choice-button">
        <Link to="/loosing-page">Next</Link>
      </div>
    </div>
  );
}

export default OpenChest;
