import { Link } from "react-router-dom";
import "./CharSelect.scss";
import ClassSelect from "../components/ClassSelect";
import InputName from "../components/InputName";

function CharSelect() {
  return (
    <div className="character-select">
      <h2>Choose your class</h2>
      <ClassSelect />
      <InputName />
      <Link to="/choice-selection" className="class-button">
        START
      </Link>
    </div>
  );
}

export default CharSelect;
