import React, { Component } from "react";
import "./Quizz.css";
import QuizzStars from "../QuizzStars/QuizzStars";
import QuizzPropositions from "../QuizzPropositions/QuizzPropositions";

class Quizz extends Component {
  state = {
    question: null,
    correctAnswer: null,
    incorrectAnswers: null,
    difficulty: "easy"
  };

  componentDidMount() {
    this.getQuestion();
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.difficulty !== this.state.difficulty && this.getQuestion();
  }

  changeDiffculty = e => {
    this.setState({
      difficulty: e.target.value
    });
  };

  async getQuestion() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=20&category=11&difficulty=" + this.state.difficulty
    );
    const data = await response.json();
    const {
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = data.results[0];

    this.setState({
      question,
      correctAnswer,
      incorrectAnswers,
    });
  }

  render() {
    const {
      question,
      difficulty,
      correctAnswer,
      incorrectAnswers
    } = this.state;

    return (
      <div className="contentQuizz">
        <h1 className="titleQuizz text-focus-in">
          may the force be with you !!!
        </h1>
        <p className="questionQuizz">{question}</p>
        <div className="zoneReponse">
          <QuizzPropositions
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
          />
        </div>
        <p className="test">prochaine texte</p>
        <QuizzStars
          difficulty={difficulty}
          changeDiffculty={this.changeDiffculty}
        />
      </div>
    );
  }
}

export default Quizz;
