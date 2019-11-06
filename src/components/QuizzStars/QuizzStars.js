import React from "react";
import "./QuizzStars.css";

const QuizzStars = ({ difficulty, changeDiffculty }) => {
  return (
    <>
      <label htmlFor="difficulty-select" className="difficulty-label">Choose a difficulty</label>
      <select
        onChange={changeDiffculty}
        className="selectDifficulty "
        name="difficulty"
        id="difficulty-select"
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>

      <ul className="divStars ">
        <li className="starsFull"></li>
        <li className={difficulty === "easy" ? "starsEmpty" : "starsFull"}></li>
        <li
          className={
            difficulty === "easy"
              ? "starsEmpty"
              : difficulty === "medium"
              ? "starsHalf"
              : "starsFull"
          }
        ></li>
        <li className={difficulty === "hard" ? "starsFull" : "starsEmpty"}></li>
        <li className={difficulty === "hard" ? "starsFull" : "starsEmpty"}></li>
      </ul>
    </>
  );
};

export default QuizzStars;
