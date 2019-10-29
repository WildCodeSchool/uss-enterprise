import React, { Component } from "react";
import "./PropositionsQuizz.css";
import Modal from "./Modal";

class PropositionsQuizz extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
      resultatQuestion: false,
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


  hide(e) {
    if (e.currentTarget.outerText === this.props.bonneReponse) {
      this.setState({ resultatQuestion: true });
    } else {
      this.setState({ resultatQuestion: false });
    }
  }

  getReponse() {
    if (!this.props.mauvaiseReponse) return null;
    let totalReponse = [this.props.bonneReponse];
    totalReponse.push(
      this.props.mauvaiseReponse[0],
      this.props.mauvaiseReponse[1],
      this.props.mauvaiseReponse[2]
    );
    totalReponse.sort(function(a, b) {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });

    let propositionsReponses = [];

    if (this.props.mauvaiseReponse) {
      propositionsReponses = totalReponse.map((reponses, index) => (
        <div key={index}>
          <input className='champReponse' type="radio" name="name" id={`propo ${index}`} />
          <label
            onClick={this.hide.bind(this)}
            htmlFor={`propo ${index}`}
            className="proposition"
          >
            {reponses}
          </label>
        </div>
      ));
    }
    return propositionsReponses;
  }

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}

        {this.getReponse()}
        <div>
          <button
            className="open-modal-btn buttonQuizz"
            onClick={this.openModalHandler}
          >
            Validez Votre Réponse
          </button>

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            resultat={this.state.resultatQuestion}
          >
            {this.state.resultatQuestion ? (
              <p>
                Congratulation !!! <br></br> Your answer is true !!!
              </p>
            ) : (
              <p>
                bad luck !!! <br></br> Your answer is false
              </p>
            )}
          </Modal>
        </div>
      </div>
    );
  }
}

export default PropositionsQuizz;
