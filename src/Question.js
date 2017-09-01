import React from 'react';
import PropTypes from 'prop-types';
import Winner from './Winner';

function QuestionContainer (props){
    return (
      <section className="questioncontainer">
        <p id="questionanswer"><span>Question:</span> {props.question}</p>
        <input type="text"
            placeholder="Answer"
            value={props.answerText} 
            onChange={props.handleTextChange}
        /> 
        <button id="answerbtn"
            onClick={props.handleSubmit}>   
            Submit
        </button>
        <div id="answerBox">
          <p id="answer"><span>Answer:</span> <i>I have no idea.</i></p>
          <button id="nextbtn">Next</button>
          <p className="directions">Give yourself a point if you got it right. Take a point away if you got it wrong.</p>
        </div>
        <Winner />
      </section>
    );
}

QuestionContainer.PropTypes ={
   question: PropTypes.string 
};
export default QuestionContainer;