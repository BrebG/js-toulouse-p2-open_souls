import { useNavigate } from "react-router-dom";
import "./CharSelect.scss";
import { useEffect, useState } from "react";
import ClassSelect from "../components/ClassSelect";

function CharSelect() {
  const [classes, setClasses] = useState([]);
  const [classIndex, setClassIndex] = useState(0);
  // const [selectedCharacter, setSelectedCharacter] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    fetch("https:eldenring.fanapis.com/api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data.data || []);
      })
      .catch((error) => console.error(error));
  }, []);

  const pickPrevious = () => {
    if (classIndex > 0) {
      setClassIndex(classIndex - 1);
    }
  };
  const pickNext = () => {
    if (classIndex < classes.length - 1) {
      setClassIndex(classIndex + 1);
    }
  };

  function handleClickSelectCharacter() {
    // setSelectedCharacter(classes[classIndex]);
    navigation("/choice-selection");
  }

  return (
    <div className="character-select">
      <h2>Choose your class</h2>
      <button type="button" onClick={pickPrevious} className="button-index">
        &#10094;
      </button>
      <div>
        {classes.map(
          (el, i) => i === classIndex && <ClassSelect key={el.id} classe={el} />
        )}
      </div>
      <button type="button" onClick={pickNext} className="button-index">
        &#10095;
      </button>
      <div className="inputs">
        <p className="text-input">Enter your name :</p>
        <input type="text" className="text-input" />
      </div>
      <button
        type="button"
        className="class-button"
        onClick={handleClickSelectCharacter}
      >
        START
      </button>
    </div>
  );
}

export default CharSelect;
