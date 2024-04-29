import PropTypes from "prop-types";
import "../pages/CombatScreen.scss";
import PlayerLifebar from "./PlayerLifebar";
import { useName } from "../contexts/NameContext";

function Player({ image }) {
  const { name } = useName();
  return (
    <div className="Player">
      <img src={image} alt={name} />
      <div>
        <PlayerLifebar />
      </div>
    </div>
  );
}

Player.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Player;
