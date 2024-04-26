import PropTypes from "prop-types";
import { useState } from "react";
import { useStats } from "../contexts/StatsContext";

function CombatAction({ dealDamage, receiveDamage }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { chosenClass } = useStats();

  const disableButtonLight = () => {
    setButtonDisabled(true);
    setTimeout(
      () => {
        setButtonDisabled(false);
      },
      1000 - Number(chosenClass.stats.dexterity) * 100
    );
  };
  const disableButtonHeavy = () => {
    setButtonDisabled(true);
    setTimeout(
      () => {
        setButtonDisabled(false);
      },
      2000 - Number(chosenClass.stats.dexterity) * 100
    );
  };

  return (
    <div className="CombatAction">
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          dealDamage(10 * (chosenClass.stats.strength / 10));
          receiveDamage(10);
          disableButtonLight();
        }}
      >
        Light attack
      </button>
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          dealDamage(20 * (chosenClass.stats.strength / 10));
          receiveDamage(10);
          disableButtonHeavy();
        }}
      >
        Heavy attack
      </button>
    </div>
  );
}

CombatAction.propTypes = {
  dealDamage: PropTypes.func.isRequired,
  receiveDamage: PropTypes.func.isRequired,
};

export default CombatAction;
