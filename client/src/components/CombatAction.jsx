import PropTypes from "prop-types";
// import { useStats } from "../contexts/StatsContext";

function CombatAction({ dealDamage, receiveDamage }) {
  // const { classe } = useStats()
  return (
    <div className="CombatAction">
      <button
        type="button"
        onClick={() => {
          dealDamage(10);
          receiveDamage(10);
        }}
      >
        Light attack
      </button>
      <button
        type="button"
        onClick={() => {
          dealDamage(20);
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
