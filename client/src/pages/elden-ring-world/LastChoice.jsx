import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function LastChoice() {
  const [loreIndex, setLoreIndex] = useState(14);

  const nextLore = () => {
    setLoreIndex(loreIndex + 1);
  };
  return (
    <div className="choice-page">
      <div className="story-text">
        <div className="lore-text">
          <p>{EldenTexts[loreIndex].content}</p>
        </div>
        <div id="div-button-next">
          {loreIndex < 15 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 15 && (
          <div>
            <h3>Make your choice</h3>
            <div className="choice-button">
              <Link to="/sneak-past">{EldenTexts[16].content}</Link>
              <Link to="/loot-reduvia">{EldenTexts[17].content}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LastChoice;
