import "../App";

function InputName() {
  return (
    <div className="inputs">
      <p className="text-input">Enter your name :</p>
      <input
        type="text"
        // value={name}
        // onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default InputName;
