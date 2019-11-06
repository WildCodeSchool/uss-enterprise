import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ModalContent.css";


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
        variant="none" 
        onClick={this.handleShow} 
          type="button"
          id="planetclick"
        >

          {console.log(this.props)}
        <img className="planets" src={this.props.planetLiost} alt="x"></img>
        </Button>
  
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Niveau ?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal__Body">Est-tu prêt à voyager vers cette planète ? </Modal.Body>
          <Modal.Footer >
            <Button variant="secondary" onClick={this.handleClose}>
              Non...
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Oui !
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
  }
  

export default ModalContent;