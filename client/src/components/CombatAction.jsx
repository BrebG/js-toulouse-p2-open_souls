import PropTypes from "prop-types";

function CombatAction({ dealDamage, receiveDamage }) {

  return (
    <div className="CombatAction">
      <button type="button" onClick={() => {
        dealDamage(10);
        receiveDamage(10);
      }}>
        Light attack
      </button>
      <button type="button" onClick={() => {
        dealDamage(30);
        receiveDamage(10);
      }}>
        Heavy attack
      </button>
    </div>
  );
}

CombatAction.propTypes = {
  dealDamage: PropTypes.func.isRequired,
  receiveDamage: PropTypes.func.isRequired
};

export default CombatAction;
