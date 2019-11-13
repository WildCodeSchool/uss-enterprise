import React from "react";
import "./IntroPage.css";
import image from "./Alien.png";
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div className="alien_container">
      <div className="bubble_text_container">
        <div className="bubble_text">
          <p className="hello_text">
            <span className="yoda-guide">
              Hello ! I'm YODA, your guide. Travel from planets to planets,
              answer the questions to complete your journey
            </span><br/>
            READY ARE YOU? GO !
          </p>
          <p className="tell_name">
            {" "}
            But if beguin you want, first your name you need to tell me
          </p>
        </div>
      </div>
      <div>
        <img src={image} className="alien"></img>
      </div>
      <div className="form_container">
        <form method="post" className="player-form">
          <div className="p_container">
            <label className="label"> </label>{" "}
            <input
              className="player-form-input"
              type="text"
              placeholder="Your Name"
              name="pseudo"
            />
          </div>
          <div className="button_container">
<<<<<<< HEAD
            <Link to="/quizz" className="button" type="submit">
=======
            <Link to="/map" className="button" type="submit">
>>>>>>> cb4c3ab07b1b4ad913b8d043ea23df62160e4bc7
              GO
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IntroPage;
