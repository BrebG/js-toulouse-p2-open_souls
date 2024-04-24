import "./ClassSelect.scss";
import PropTypes from "prop-types";
import CharStats from "./CharStats";

function ClassSelect({ caste }) {
  return (
    <div className="class-select">
      <div>
        <div>
          <div className="char-select">
            <img src={caste.image} alt={caste.name} className="class-image" />
          </div>
          <CharStats stats={caste.stats} />
        </div>
      </div>
    </div>
  );
}

ClassSelect.propTypes = {
  caste: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      level: PropTypes.number.isRequired,
      vigor: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      dexterity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ClassSelect;
