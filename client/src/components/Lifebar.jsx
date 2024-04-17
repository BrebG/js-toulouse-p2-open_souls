import { useState } from "react";
import PropTypes from "prop-types";

function Lifebar({ ennemyName, PlayerName }) {
  const [health, setHealth] = useState(100);

  const dealDamage = (damage) => {
    setHealth((prevHealth) => Math.max(prevHealth - damage, 0));
  };

  return (
    <div className="Lifebar">
      <p>{ennemyName || PlayerName}</p>
      <div style={{ width: `${health}%` }}>{health}%</div>
      <button type="button" onClick={() => dealDamage(10)}>
        Take 10 Damage
      </button>
    </div>
  );
}

Lifebar.propTypes = {
  ennemyName: PropTypes.string.isRequired,
  PlayerName: PropTypes.string.isRequired,
};

export default Lifebar;
