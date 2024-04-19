import PropTypes from "prop-types";
import "./CombatScreen.scss";
import PlayerLifebar from "./PlayerLifebar";

function Player({ image, PlayerName, PlayerHealth }) {
  return (
    <div className="Player">
      <img src={image} alt={PlayerName} />
      <div>
        <PlayerLifebar PlayerHealth={PlayerHealth} />
      </div>
    </div>
  );
}

Player.propTypes = {
  image: PropTypes.string.isRequired,
  PlayerName: PropTypes.string.isRequired,
  PlayerHealth: PropTypes.number.isRequired,
};

export default Player;
