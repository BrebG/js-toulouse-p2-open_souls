import PropTypes from "prop-types";

function Lifebar({ EnnemyHealth, ennemyName }) {
  return (
    <div className="Lifebar">
      <p>{ennemyName}</p>
      <div style={{ width: `${EnnemyHealth}%` }}>{EnnemyHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  ennemyName: PropTypes.string.isRequired,
  EnnemyHealth: PropTypes.number.isRequired,
};

export default Lifebar;
