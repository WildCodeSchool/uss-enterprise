import React from "react";
import "./Quizz.css";
import StarsQuizz from "./QuizzStars/StarsQuizz";
import PropositionsQuizz from "./Proposition/PropositionsQuizz";

class Quizz extends React.Component {
  state = {
    question: null,
    correctAnswer: null,
    incorrectAnswers: null,
    difficulty: "easy"
  };

  componentDidUpdate(preProps, preState) {
    console.log(preProps);
    console.log(preState);
  }

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
          que la Force soit avec toi !!!
        </h1>
        <p className="questionQuizz">{question}</p>
        <div className="zoneReponse">
          <PropositionsQuizz
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
          />
        </div>
        <p>prochaine texte</p>
        <StarsQuizz
          difficulty={difficulty}
          changeDiffculty={this.changeDiffculty}
        />
      </div>
    );
  }
}

export default Quizz;
