import PropTypes from "prop-types";

function Lifebar({ PlayerHealth, PlayerName }) {
  return (
    <div className="Lifebar">
      <p>{PlayerName}</p>
      <div style={{ width: `${PlayerHealth}%` }}>{PlayerHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  PlayerName: PropTypes.string.isRequired,
  PlayerHealth: PropTypes.number.isRequired,
};

export default Lifebar;
