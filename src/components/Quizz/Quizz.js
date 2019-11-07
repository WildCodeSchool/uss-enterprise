import React from "react";
import "./Quizz.css";
import QuizzStars from "../QuizzStars/QuizzStars";
import QuizzPropositions from "../QuizzPropositions/QuizzPropositions";

class Quizz extends React.Component {
  state = {
    question: null,
    correctAnswer: null,
    incorrectAnswers: null,
    difficulty: "easy"
  };

  changeDiffculty = e => {
    this.setState({
      difficulty: e.target.value
    });
  };
  async getQuestions() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=20&category=11&difficulty=" +
        this.state.difficulty
    );
    const data = await response.json();
    const {
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      difficulty
    } = data.results[0];

    this.setState({
      question,
      correctAnswer,
      incorrectAnswers,
      difficulty
    });
  }

  componentDidUpdate(prevState, choco) {
    choco.difficulty !== this.state.difficulty && this.getQuestions();
  }

  componentDidMount() {
    this.getQuestions();
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
        <p>prochaine texte</p>
        <QuizzStars
          difficulty={difficulty}
          changeDiffculty={this.changeDiffculty}
        />
      </div>
    );
  }
}

export default Quizz;
