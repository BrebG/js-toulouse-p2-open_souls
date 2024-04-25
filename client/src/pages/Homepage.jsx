import { Link } from "react-router-dom";
import InputCode from "../components/InputCode";
import "./Homepage.scss";

function Homepage() {
  return (
    <div className="home">
      <h1>Open Souls</h1>
      <div className="home-text">
        <p>
          Welcome to the world of Open Souls, a narrative game where you embody
          the hero of your own destiny. Dive into an epic world that merges the
          mysteries and dangers of Elden Ring with the excitement and
          exhilarating hunts of Monster Hunter World.
        </p>
        <p>
          In Open Souls, every choice you make influences the course of the
          story, shaping your own adventure. This game combines the intensity of
          Souls-like combat with the freedom offered by multiple choices.
        </p>
        <p>
          In Open Souls, the adventure awaits you. Are you ready to forge your
          destiny in this world where every choice can change the course of
          history?
        </p>
      </div>

      <InputCode />
      <Link to="character-selection" className="home-button">
        NEXT
      </Link>
    </div>
  );
}

export default Homepage;
