import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function MimicChoice() {
  const [loreIndex, setLoreIndex] = useState(10);

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
          {loreIndex < 11 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 11 && (
          <div>
            <h3>Make your choice</h3>
            <div className="choice-button">
              <Link to="/open-chest">Yes</Link>
              <Link to="/last-choice">No</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MimicChoice;
