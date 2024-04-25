import PropTypes from "prop-types";

function Lifebar({ EnnemyHealth, EnnemyName }) {
  return (
    <div className="Lifebar">
      <p>{EnnemyName}</p>
      <div style={{ width: `${EnnemyHealth}%` }}>{EnnemyHealth}%</div>
    </div>
  );
}

Lifebar.propTypes = {
  EnnemyName: PropTypes.string.isRequired,
  EnnemyHealth: PropTypes.number.isRequired,
};

export default Lifebar;
