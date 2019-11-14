import React, { Component } from "react";
import "./SolarSystem.css";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      idChoosen: 0,
      planetList: [
        {
          id: 1,
          status: true,
          planetURL:
            "http://assets.stickpng.com/thumbs/5a00de530e8525eec2752fff.png"
        },
        {
          id: 2,
          status: false,
          planetURL:
            "https://space-facts.com/wp/wp-content/uploads/mercury-transparent.png"
        },
        {
          id: 3,
          status: false,
          planetURL:
            "https://space-facts.com/wp-content/uploads/mars-transparent.png"
        },
        {
          id: 4,
          status: false,
          planetURL:
            "https://cdn.pixabay.com/photo/2018/10/22/01/00/blue-3764277_960_720.png"
        },
        {
          id: 5,
          status: false,
          planetURL:
            "http://pngimg.com/uploads/mars_planet/mars_planet_PNG27.png"
        },
        {
          id: 6,
          status: false,
          planetURL:
            "http://www.pngmart.com/files/3/Space-Planet-PNG-Transparent-Image.png"
        },
        {
          id: 7,
          status: false,
          planetURL:
            "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/04/saturn-transparent-background-planet-1.png?fit=797%2C620"
        },
        {
          id: 8,
          status: false,
          planetURL:
            "http://www.pngall.com/wp-content/uploads/2/Mercury-Planet.png"
        }
      ]
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };
  
  handleShow = (idChoosen) => {
    const planetList = this.state.planetList.map(planet => {
      if (planet.id === idChoosen+1) {
        return { ...planet, status: true }
      }
      return planet
    });
    this.setState({
      show: true,
      idChoosen,
      planetList
    });
  }


  render() {
    const { show, planetList, idChoosen } = this.state;
    return (
      <div className="content-planet">
        <div className="modal__fade">
          {
          planetList.map((planet, index) => {
            return (
              <Button
                key={planet.id}
                variant="none"
                onClick={e => {
                  this.handleShow(planet.id);
                }}
                value = {planet.id}
                type="button"
                className="planetclick"
                disabled={!planet.status}
              >
                <img
                  className="planets"
                  src={planet.planetURL}
                  alt={planet.id}
                />
              </Button>
              
             
            );
          })}
          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Niveau {idChoosen}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="Modal__Body">
              Are you ready to travel to this planet?{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Non...
              </Button>
              <Link to="/quizz" className="btn btn-primary" variant="primary" onClick={this.handleClose}>
                Oui !
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
