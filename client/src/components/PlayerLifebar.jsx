import { useName } from "../contexts/NameContext";
import { usePlayerHealth } from "../contexts/PlayerContext";

function Lifebar() {
  const { name } = useName();
  const { playerHealth } = usePlayerHealth();
  return (
    <div className="Lifebar">
      <p>{name}</p>
      <div style={{ width: `${playerHealth}%` }}>{playerHealth}%</div>
    </div>
  );
}

export default Lifebar;
