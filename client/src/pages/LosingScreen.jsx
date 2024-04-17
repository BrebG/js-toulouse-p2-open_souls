import { Link } from "react-router-dom";
import "./losingscreen.scss";

function YouDiedPage() {
  return (
    <div className="you-died-container">
      <h1 className="you-died-text">YOU DIED!</h1>
      <Link to="/" className="retry-button">
        TRY AGAIN
      </Link>
    </div>
  );
}

export default YouDiedPage;
