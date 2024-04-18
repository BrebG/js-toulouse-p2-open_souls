import PropTypes from "prop-types";

function CombatAction({ dealDamage }) {
  return (
    <div className="CombatAction">
      <button type="button" onClick={() => dealDamage(10)}>
        Light attack
      </button>
      <button type="button" onClick={() => dealDamage(30)}>
        Heavy attack
      </button>
    </div>
  );
}

CombatAction.propTypes = {
  dealDamage: PropTypes.func.isRequired,
};

export default CombatAction;
