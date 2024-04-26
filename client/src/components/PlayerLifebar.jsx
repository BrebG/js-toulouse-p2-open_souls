import PropTypes from "prop-types";

function Lifebar({ playerHealth, playerName }) {
  return (
    <div className="Lifebar">
      <p>{playerName}</p>
      <div style={{ width: `${playerHealth}%` }}>{playerHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerHealth: PropTypes.number.isRequired,
};

export default Lifebar;
