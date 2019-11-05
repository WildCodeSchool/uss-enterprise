import React, { Component } from "react";
import "./SolarSystem.css";
import ModalContent from "../ModalContent/ModalContent";


class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="content-planet">
      <ModalContent srcImage={this.props.planetURL} />
        <div className="status">
          <span className={this.props.done ? "done" : "todo"}></span>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
