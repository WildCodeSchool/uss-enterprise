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
        </div>
      <button
        onClick={() => givePoints(difficulty, difficultyIsChoose)}
        htmlFor="difficulty-select"
        className="difficulty-label"
      >
        Choose a difficulty
      </button>

      <div>
        

        <div className="divImageDifficulty">
          <img
            className="imageDifficulty flip-2-ver-right-fwd"
            src={
              difficulty === "easy"
                ? "http://iconbug.com/data/f8/256/fde579446855b2c35fcb817e46fbed9e.png"
                : difficulty === "medium"
                ? "https://purepng.com/public/uploads/large/purepng.com-stormtrooperstormtrooperfictional-soldierstar-warsground-forcegalactic-empire-17015278276492ncw5.png"
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
