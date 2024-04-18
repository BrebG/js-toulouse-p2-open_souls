import { Link } from "react-router-dom";
import InputCode from "../components/InputCode";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home">
      <h1>Open Souls</h1>
      <p className="home-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        ducimus incidunt esse vitae amet laudantium error aliquam asperiores
        inventore quo itaque adipisci sequi obcaecati, dignissimos minima ad
        odit, dolorum rerum! Velit a quibusdam expedita obcaecati nam illo.
        Dicta, modi et ea eligendi aut quisquam porro esse dolorum fugiat
        facere, corporis, eius perferendis possimus odio iste ab numquam
        incidunt sequi hic. Eaque quae tempore voluptatum similique.
      </p>
      <InputCode />
      <Link to="character-selection" className="home-button">
        NEXT
      </Link>
    </div>
  );
}

export default HomePage;
