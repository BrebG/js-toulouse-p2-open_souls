import { Link } from "react-router-dom";
import "./CharSelect.scss";
import ClassSelect from "../components/ClassSelect";

function CharSelect() {
  return (
    <div className="character-select">
      <h2>Choose your class</h2>
      <ClassSelect />
      <div className="inputs">
        <p className="text-input">Enter your name :</p>
        <input type="text" className="text-input" />
      </div>
      <Link to="/" className="class-button">
        START
      </Link>
    </div>
  );
}

export default CharSelect;
