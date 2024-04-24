import { Link } from "react-router-dom";
import "./ChoicePage.scss";
import { useState } from "react";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function ChoicePage() {
  const [loreIndex, setLoreIndex] = useState(0);
  const nextLore = () => {
    setLoreIndex(loreIndex + 1);
  };
  return (
    <div className="choice-page">
      <div className="story-text">
        <div className="lore-text">
          <p>{EldenTexts[loreIndex].content}</p>
          {loreIndex === 5 && <p>{EldenTexts[6].content}</p>}
        </div>
        <div id="div-button-next">
          {loreIndex < 5 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 5 && (
          <div>
            <h3>Make your choice</h3>
            <div className="choice-button">
              <Link to="/loosing-page" className="link-button">
                Old Chest
              </Link>
              <Link to="/boss-fight" className="link-button">
                Small Chest
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChoicePage;
