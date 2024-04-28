import PropTypes from "prop-types";
import { useState } from "react";
import { useStats } from "../contexts/StatsContext";
import { useItem } from "../contexts/ItemContext";

function CombatAction({ dealDamage }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { chosenClass } = useStats();
  const lightAttackDelay = 1500 - (Number(chosenClass.stats.dexterity));
  const heavyAttackDelay = 4000 - (Number(chosenClass.stats.dexterity));
  const { equippedItems } = useItem();
  const { weapon } = equippedItems;

  const disableButtonLight = () => {
    setButtonDisabled(true);
    setTimeout(
      () => {
        setButtonDisabled(false);
      },
      lightAttackDelay
    );
  };
  const disableButtonHeavy = () => {
    setButtonDisabled(true);
    setTimeout(
      () => {
        setButtonDisabled(false);
      },
      heavyAttackDelay);
  };

  return (
    <div className="CombatAction">
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          dealDamage(Math.floor(10 * ((chosenClass.stats.strength / 10) + (weapon.attack[0].amount / 100))));
          disableButtonLight();
        }}
      >
        Light attack
      </button>
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          dealDamage(Math.floor(10 * ((chosenClass.stats.strength / 10) + (weapon.attack[0].amount / 100))) + 10);
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
};

export default CombatAction;
