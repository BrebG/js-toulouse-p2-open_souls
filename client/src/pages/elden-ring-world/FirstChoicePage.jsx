import { Link } from "react-router-dom";
import "./ChoicePage.scss";
import { useState } from "react";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function FirstChoicePage() {
  const [loreIndex, setLoreIndex] = useState(0);

  const nextLore = () => {
    setLoreIndex(loreIndex + 1);
  };

  return (
    <div className={`choice-page ${loreIndex === 3 ? "new-class" : ""}`}>
      <div className="story-text">
        <div className="lore-text">
          <p className="paragraph">{EldenTexts[loreIndex].content}</p>
        </div>
        <div id="div-button-next">
          {loreIndex < 4 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 4 && (
          <div>
            <h3>Make your choice</h3>
            <div className="choice-button">
              <Link to="/loot-nagakiba">Old Chest</Link>
              <Link to="/loot-sword">Small Chest</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FirstChoicePage;
