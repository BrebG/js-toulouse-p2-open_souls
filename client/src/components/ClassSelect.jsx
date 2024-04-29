import PropTypes from "prop-types";
import "./ClassSelect.scss";
import CharStats from "./CharStats";

function ClassSelect({ classe }) {
  return (
    <div className="class-select">
      <div>
        <div>
          <div className="char-select">
            <img src={classe.image} alt={classe.name} className="class-image" />
          </div>
          <CharStats classe={classe} />
        </div>
      </div>
    </div>
  );
}

ClassSelect.propTypes = {
  classe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      level: PropTypes.string.isRequired,
      vigor: PropTypes.string.isRequired,
      strength: PropTypes.string.isRequired,
      dexterity: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ClassSelect;
