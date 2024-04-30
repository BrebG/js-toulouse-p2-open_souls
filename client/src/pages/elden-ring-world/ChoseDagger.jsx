import { useState } from "react";
import { Link } from "react-router-dom";
import { EldenTexts } from "../../tools/ArrayLoreDialogue";

function ChoseDagger() {
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
              After taking the dagger you take the long red path in front of
              you. You are thirsty and bruised... You lost yourself in a shady
              desert, starting to hallucinate. You start to think that you will
              meet your end.
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

export default ChoseDagger;
