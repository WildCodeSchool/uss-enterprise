import React from "react";
import "./QuizzStars.css";

const QuizzStars = ({
  difficulty,
  changeDifficulty,
  NumberTry,
  givePoints,
  difficultyIsChoose
}) => {
  return (
    <>
      <button
        onClick={() => givePoints(difficulty, difficultyIsChoose)}
        htmlFor="difficulty-select"
        className="difficulty-label"
      >
        Choose a difficulty
      </button>

      <div>
        <select
          onChange={changeDifficulty}
          className={
            difficultyIsChoose ? "selectDifficultyHidden" : "selectDifficulty"
          }
          name="difficulty"
          id="difficulty-select"
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>

        <div className="divImageDifficulty">
          <img
            className="imageDifficulty"
            src={
              difficulty === "easy"
                ? "http://iconbug.com/data/f8/256/fde579446855b2c35fcb817e46fbed9e.png"
                : difficulty === "medium"
                ? "https://i0.wp.com/freepngimages.com/wp-content/uploads/2015/10/Watto-star-wars-character.png?fit=450%2C600"
                : "https://img.pngio.com/hd-star-wars-anakin-skywalker-transparent-background-star-wars-anakin-skywalker-png-3990_3815.png"
            }
            alt="user difficulty"
          />
          <ul className="divStars ">
            <li className="starsFull"></li>
            <li
              className={difficulty === "easy" ? "starsEmpty" : "starsFull"}
            ></li>
            <li
              className={
                difficulty === "easy"
                  ? "starsEmpty"
                  : difficulty === "medium"
                  ? "starsHalf"
                  : "starsFull"
              }
            ></li>
            <li
              className={difficulty === "hard" ? "starsFull" : "starsEmpty"}
            ></li>
            <li
              className={difficulty === "hard" ? "starsFull" : "starsEmpty"}
            ></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default QuizzStars;
