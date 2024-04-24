import { Link } from "react-router-dom";
import "./CharSelect.scss";
import { useEffect, useState } from "react";
import ClassSelect from "../components/ClassSelect";
import { useStats } from "../contexts/StatsContext"

function CharSelect() {
  const [classIndex, setClassIndex] = useState(0);
  const [classes, setClasses] = useState([]);
  const { setChosenClass } = useStats();


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
        {classes.map((classe, i) => (
          i === classIndex && <ClassSelect key={classe.id} classe={classe} />
        ))}
        <button type="button" onClick={pickNext} className="button-index">
          &#10095;
        </button>
      </div>
      <div className="inputs">
        <p className="text-input">Enter your name :</p>
        <input type="text" className="text-input" />
      </div>
      <Link to="/choice-selection" className="class-button" onClick={setChosenClass(classes[classIndex])}>
        START
      </Link>
    </div>
  );
}

export default CharSelect;
