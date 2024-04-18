import PropTypes from "prop-types";

function Lifebar({ PlayerHealth, playerName }) {
  return (
    <div className="Lifebar">
      <p>{playerName}</p>
      <div style={{ width: `${PlayerHealth}%` }}>{PlayerHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  playerName: PropTypes.string.isRequired,
  PlayerHealth: PropTypes.number.isRequired,
};

export default Lifebar;
