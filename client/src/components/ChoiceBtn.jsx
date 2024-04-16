import { useNavigate } from 'react-router-dom';
import "./choicepage.scss"

function ChoiceButtons() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // pour que lorsque l'on fait un page precedente ca ne marche pas pendant le jeux et eviter les glitch
    navigate(path, { replace: true });
  };

  return (
    <div className="choicebutton">
      <h1>Choisissez votre destination :</h1>

      {/* il faut encore determiner les different lieu ou l'on pourrais faire un choix  */}
      <button type = "button" onClick={() => handleNavigation("/choix 1")}>choix 1 </button>
      <button type="button" onClick={() => handleNavigation("/choix 2")}>choix 2</button>
    </div>
  );
}

export default ChoiceButtons;