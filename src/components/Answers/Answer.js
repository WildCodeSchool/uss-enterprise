import React from 'react';

const Answer = ({ answer, id, checkCorrectAnswer }) => (
  <div key={answer}>
    <input
      className="champReponse"
      type="radio"
      name="name"
      id={id}
    />
    <label
      htmlFor={id}
      className="proposition"
      onClick={checkCorrectAnswer}
    >
      {answer}
    </label>
  </div>
);

export default Answer;
