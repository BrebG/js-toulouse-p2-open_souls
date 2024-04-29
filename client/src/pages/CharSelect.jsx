import { useNavigate } from "react-router-dom";
import "./CharSelect.scss";
import { useEffect, useState } from "react";
import ClassSelect from "../components/ClassSelect";
import { useStats } from "../contexts/StatsContext";
import InputName from "../components/InputName";

function CharSelect() {
  const [classIndex, setClassIndex] = useState(0);
  const [classes, setClasses] = useState([]);
  const { setChosenClass } = useStats();
  const navigate = useNavigate();

  function chooseClass() {
    setChosenClass(classes[classIndex])
  }
  const handleButtonClick = () => {
    chooseClass();
    navigate('/choice-selection');
  }

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/classes")
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

  return (
    <div className="character-select">
      <h2>Choose your class</h2>
      <div className="char-select">
        <button type="button" onClick={pickPrevious} className="button-index">
          &#10094;
        </button>
        {classes.map(
          (classe, i) =>
            i === classIndex && <ClassSelect key={classe.id} classe={classe} />
        )}
        <button type="button" onClick={pickNext} className="button-index">
          &#10095;
        </button>
      </div>
      <InputName />
      <button
        type="button"
        className="class-button"
        onClick={handleButtonClick}
      >
        START
      </button>
    </div >
  );
}

export default CharSelect;
