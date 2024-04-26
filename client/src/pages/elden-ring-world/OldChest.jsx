import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";
import "./ChoicePage.scss";

function OldChest() {
  const [loreIndex, setLoreIndex] = useState(5);

  const nextLore = () => {
    setLoreIndex(loreIndex + 2);
  };
  return (
    <div className="choice-page">
      <div className="story-text">
        <div className="lore-text">
          <p>{EldenTexts[loreIndex].content}</p>
          {loreIndex === 7 && <p>{EldenTexts[8].content}</p>}
        </div>
        <div id="div-button-next">
          {loreIndex < 6 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 7 && (
          <div className="choice-button">
            <Link to="/boss-fight-godefroy">Next</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OldChest;
