import React, { Component } from "react";
import "./Quizz.css";
import QuizzPropositions from "../QuizzPropositions/QuizzPropositions";

class Quizz extends Component {
  constructor({ props }) {
    super(props);
  }
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

  changeDifficulty = e => {
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
      incorrect_answers: incorrectAnswers
    } = data.results[0];

    this.setState({
      question,
      correctAnswer,
      incorrectAnswers
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
          {this.props.name}<br />
          may the force be with you !!!
        </h1>
        <p className="questionQuizz">{question}</p>
        <div>
          <QuizzPropositions
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
            points={this.props.points}
            calcPoints={this.props.calcPoints}
            difficulty={difficulty}
            changeDifficulty={this.changeDifficulty}
            givePoints={this.props.givePoints}
            difficultyIsChoose={this.props.difficultyIsChoose}
            
          />
        </div>
      </div>
    );
  }
}

export default Quizz;
