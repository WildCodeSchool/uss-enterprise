import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show : false
    }
  }
    
    handleClose = () => {
      this.setState({
        show : false
      })
    }

    handleShow = () => {
      this.setState({
        show : true
      })
    }
    
    render(){
    const { show } = this.state
    return (
      <div id="modal__fade">
        <Button 
        variant="light" 
        onClick={this.handleShow}
          type="button"
          id="planetclick"
        >
        <img className="planets" src={this.props.srcImage} alt="x"></img>
        </Button>
  
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="Modal__header">Niveau = x</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal__Body">Est-tu prêt à voyager vers cette planète ? </Modal.Body>
          <Modal.Footer className="Modal__Footer">
            <Button variant="danger" onClick={this.handleClose}>
              Non, pas encore
            </Button>
            <Button variant="success" onClick={this.handleClose}>
              Oui !
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  }
  

export default ModalContent;