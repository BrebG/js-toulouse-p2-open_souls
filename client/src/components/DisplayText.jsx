
function DisplayText({ text }) {
    return (
        <div>
            <p>{text.content}</p>
            <h1>{text.title}</h1>
        </div>
    );
}

export default DisplayText;