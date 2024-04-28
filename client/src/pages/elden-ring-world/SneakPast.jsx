import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function SneakPast() {
  const [loreIndex, setLoreIndex] = useState(19);

  const nextLore = () => {
    setLoreIndex(loreIndex + 1);
  };

  return (
    <div className={`choice-page ${loreIndex >= 19 ? "sneak-past" : ""}`}>
      <div className="story-text">
        <div className="lore-text">
          {loreIndex === 19 && (
            <p className="paragraph">
              Nothing happens, you run to distance yourself from the corpse and
              fall to the ground. You are thirsty and bruised...
            </p>
          )}

          <p className="paragraph">{EldenTexts[loreIndex].content}</p>
        </div>

        <div id="div-button-next">
          {loreIndex < 20 && (
            <button type="button" id="next-lore-button" onClick={nextLore}>
              &#10095;
            </button>
          )}
        </div>
      </div>
      {loreIndex === 20 && (
        <div className="choice-button">
          <Link to="/boss-fight-radahn">Next</Link>
        </div>
      )}
    </div>
  );
}

export default SneakPast;
