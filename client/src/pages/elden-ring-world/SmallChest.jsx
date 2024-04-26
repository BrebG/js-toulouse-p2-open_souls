import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";
import "./ChoicePage.scss";

function SmallChest() {
  const [loreIndex, setLoreIndex] = useState(6);

  const nextLore = () => {
    setLoreIndex(loreIndex + 1);
  };

  return (
    <div
      className={`choice-page small-old-chests ${loreIndex >= 7 ? "small-chest" : ""}`}
    >
      <div className="story-text">
        <div className="lore-text">
          <p className="paragraph">{EldenTexts[loreIndex].content}</p>
          {loreIndex === 7 && <p>{EldenTexts[8].content}</p>}
        </div>
        <div id="div-button-next">
          {loreIndex < 7 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      <div>
        {loreIndex === 7 && (
          <div className="choice-button">
            <Link to="/boss-fight">Next</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SmallChest;
