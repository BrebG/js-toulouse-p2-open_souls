import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
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
      <div className="inputs">
        <p className="text-input">Enter your code :</p>
        <input type="text" className="app-input" />
      </div>
      <Link to="character-selection" className="app-button">
        NEXT
      </Link>
    </div>
  );
}

export default App;
