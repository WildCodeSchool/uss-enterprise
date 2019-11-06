import React, { Component } from "react";
import "./PropositionsQuizz.css";
import Modal from "../Modal/Modal";

class PropositionsQuizz extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
      questionResult: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  hide = e => {
    const { correctAnswer } = this.props;
    
    this.setState({
        questionResult: e.currentTarget.outerText === correctAnswer
    })
    ;
  };

  renderReponse() {
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
        <div key={answer}>
          <input
            className="champReponse"
            type="radio"
            name="name"
            id={`propo-${i}`}
          />
          <label
            onClick={this.hide}
            htmlFor={`propo-${i}`}
            className="proposition"
          >
            {answer}
          </label>
        </div>
      ));

    return randomlySortedAnswers;
  }

  render() {
    const { isShowing, questionResult } = this.state;
    return (
      <div>
        {isShowing && (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        )}
        {this.renderReponse()}
        <div>
          <button
            className="open-modal-btn buttonQuizz"
            onClick={this.openModalHandler}
          >
            submit your answer !
          </button>
          <Modal
            className="modal"
            show={isShowing}
            close={this.closeModalHandler}
            resultat={questionResult}
          ></Modal>
        </div>
      </div>
    );
  }
}

export default PropositionsQuizz;
