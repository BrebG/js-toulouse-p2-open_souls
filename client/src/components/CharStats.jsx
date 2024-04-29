import PropTypes from "prop-types";
import "./CharStats.scss";

function CharStats({ classe }) {
  return (
    <div className="character-stats">
      <ul>
        <li>Level : {classe.stats.level}</li>
        <li>Vigor : {classe.stats.vigor}</li>
        <li>Strength : {classe.stats.strength}</li>
        <li>Dexterity : {classe.stats.dexterity}</li>
      </ul>
    </div>
  );
}
CharStats.propTypes = {
  classe: PropTypes.shape({
    stats: PropTypes.shape({
      level: PropTypes.string.isRequired,
      vigor: PropTypes.string.isRequired,
      strength: PropTypes.string.isRequired,
      dexterity: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharStats;
