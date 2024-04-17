import { useEffect, useState } from "react";
import "./ClassSelect.scss";
import CharStats from "./CharStats";

function ClassSelect() {
  const [classIndex, setClassIndex] = useState(0);
  const [classes, setClasses] = useState([]);

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
    <div className="class-select">
      <div>
        {classes.length > 0 && classes[classIndex] && (
          <div>
            <div className="char-select">
              <button
                type="button"
                onClick={pickPrevious}
                className="button-index"
              >
                &#10094;
              </button>
              <img
                src={classes[classIndex].image}
                alt={classes[classIndex].name}
                className="class-image"
              />

              <button type="button" onClick={pickNext} className="button-index">
                &#10095;
              </button>
            </div>
            <CharStats classIndex={classIndex} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassSelect;
