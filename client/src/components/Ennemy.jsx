import PropTypes from "prop-types";
import "../pages/CombatScreen.scss";
import EnnemyLifebar from "./EnnemyLifebar";

function Ennemy({ image, EnnemyName, EnnemyHealth }) {
  return (
    <div className="Ennemy">
      <img src={image} alt={EnnemyName} />
      <div>
        <EnnemyLifebar EnnemyHealth={EnnemyHealth} />
      </div>
    </div>
  );
}

Ennemy.propTypes = {
  image: PropTypes.string.isRequired,
  EnnemyName: PropTypes.string.isRequired,
  EnnemyHealth: PropTypes.number.isRequired,
};

export default Ennemy;
