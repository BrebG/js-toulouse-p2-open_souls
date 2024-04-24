import "./CharStats.scss";
import PropTypes from "prop-types";

function CharStats({ stats }) {
  return (
    <div className="character-stats">
      <ul>
        <li>Level : {stats.level}</li>
        <li>Vigor : {stats.vigor}</li>
        <li>Strenght : {stats.strength}</li>
        <li>Dexterity : {stats.dexterity}</li>
      </ul>
    </div>
  );
}

CharStats.propTypes = {
  stats: PropTypes.shape({
    level: PropTypes.number.isRequired,
    vigor: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CharStats;
