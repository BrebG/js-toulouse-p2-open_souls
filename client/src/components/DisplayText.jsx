import PropTypes from "prop-types";

function DisplayText({ text }) {
    return (
        <div>
            <p>{text.content}</p>
        </div>
    );
}

DisplayText.propTypes = {

    text: PropTypes.shape({
  
      content: PropTypes.string.isRequired,
        
    }).isRequired,
  
  }

export default DisplayText;