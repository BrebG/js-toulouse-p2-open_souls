import PropTypes from 'prop-types';
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
      level: PropTypes.number.isRequired,
      vigor: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      dexterity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ClassSelect;
