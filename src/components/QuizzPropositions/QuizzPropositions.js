import React, { Component } from "react";
import "./QuizzPropositions.css";
import Modal from "../Modal/Modal";
import Answer from "../Answers/Answer";

class QuizzPropositions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
      questionResult: false
    };
  }

  openModal = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModal = () => {
    this.setState({
      isShowing: false
    });
  };

  checkCorrectAnswer = e => {
    const { correctAnswer } = this.props;
    
    this.setState({
        questionResult: e.currentTarget.outerText === correctAnswer
    })
    ;
  };

  renderAnswers() {
    const { incorrectAnswers, correctAnswer } = this.props;

    if (!incorrectAnswers) return null;

    const randomlySortedAnswers = [correctAnswer, ...incorrectAnswers]
      .sort((a, b) => {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        }
        return 0;
      })
      .map((answer, i) => (
        <Answer key={answer} answer={answer} id={`answer-${i}`} checkCorrectAnswer={this.checkCorrectAnswer}/>
      ));
      

    return randomlySortedAnswers;
  }

  render() {
    const { isShowing, questionResult } = this.state;
    return (
      <div>
        {isShowing && (
          <div onClick={this.closeModal} className="back-drop"></div>
        )}
        {this.renderAnswers()}
        <div>
          <button
            className="open-modal-btn buttonQuizz"
            onClick={this.openModal}
          >
            submit your answer !
          </button>
          <Modal
            className="modal"
            show={isShowing}
            close={this.closeModal}
            result={questionResult}
          ></Modal>
        </div>
      </div>
    );
  }
}

export default QuizzPropositions;