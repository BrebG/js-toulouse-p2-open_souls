import PropTypes from "prop-types";
import "../pages/CombatScreen.scss";
import EnnemyLifebar from "./EnnemyLifebar";

function Ennemy({ image, ennemyName, ennemyHealth }) {
  return (
    <div className="Ennemy">
      <img src={image} alt={ennemyName} />
      <div>
        <EnnemyLifebar ennemyHealth={ennemyHealth} ennemyName={ennemyName} />
      </div>
    </div>
  );
}

Ennemy.propTypes = {
  image: PropTypes.string.isRequired,
  ennemyName: PropTypes.string.isRequired,
  ennemyHealth: PropTypes.number.isRequired,
};

export default Ennemy;
