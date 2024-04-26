import PropTypes from "prop-types";
import "../pages/CombatScreen.scss";
import PlayerLifebar from "./PlayerLifebar";

function Player({ image, playerName, playerHealth }) {
  return (
    <div className="Player">
      <img src={image} alt={playerName} />
      <div>
        <PlayerLifebar playerHealth={playerHealth} playerName={playerName} />
      </div>
    </div>
  );
}

Player.propTypes = {
  image: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerHealth: PropTypes.number.isRequired,
};

export default Player;
