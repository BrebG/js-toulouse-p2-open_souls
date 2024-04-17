import { useEffect, useState } from "react";
import "./CharStats.scss";
import PropTypes from "prop-types";

function CharStats({ classIndex }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/classes")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data.data || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="character-stats">
      {classes.length > 0 && classes[classIndex] && (
        <ul>
          <li>Level : {classes[classIndex].stats.level}</li>
          <li>Vigor : {classes[classIndex].stats.vigor}</li>
          <li>Strenght : {classes[classIndex].stats.strength}</li>
          <li>Dexterity : {classes[classIndex].stats.dexterity}</li>
        </ul>
      )}
    </div>
  );
}

CharStats.propTypes = {
  classIndex: PropTypes.string.isRequired, // Définition de PropTypes pour classIndex
};

export default CharStats;
