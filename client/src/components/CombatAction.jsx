import PropTypes from "prop-types";
import { useState } from "react";
import { useStats } from "../contexts/StatsContext";

function CombatAction({ dealDamage, receiveDamage }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const disableButton = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
  };

  const { chosenClass } = useStats();

  return (
    <div className="CombatAction">
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          dealDamage(10 * (chosenClass.stats.strength / 10));
          receiveDamage(10);
          disableButton();
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
