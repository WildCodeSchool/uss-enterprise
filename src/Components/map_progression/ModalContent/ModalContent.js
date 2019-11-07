import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalContent.css";

class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      idChoosen: 0
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  render() {
    const { show } = this.state;
    return (
      <div id="modal__fade">
        {/*console.log(this.props[0])*/}

        {this.props.planetsList.map(planet => {
          return (
            <Button
              key={planet.id}
              variant="none"
              onClick={e => {
                this.setState({
                  idChoosen: planet.id
                });
                this.handleShow();
              }}
              type="button"
              id="planetclick"
            >
              <img
                className="planets"
                src={planet.planetURL}
                alt={planet.id}
              ></img>
            </Button>
          );
        })}
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Niveau {this.state.idChoosen}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal__Body">
            Are you ready to travel to this planet?{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Non...
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Oui !
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalContent;
