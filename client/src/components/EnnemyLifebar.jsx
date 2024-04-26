import PropTypes from "prop-types";

function Lifebar({ ennemyHealth, ennemyName }) {
  return (
    <div className="Lifebar">
      <p>{ennemyName}</p>
      <div style={{ width: `${ennemyHealth}%` }}>{ennemyHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  ennemyName: PropTypes.string.isRequired,
  ennemyHealth: PropTypes.number.isRequired,
};

export default Lifebar;
