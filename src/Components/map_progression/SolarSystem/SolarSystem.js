import React, { Component } from "react";
import "./SolarSystem.css";
import ModalContent from "../ModalContent/ModalContent";

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: [
        {
          id:1,
          done: false,
          planetURL:
            "http://www.pngall.com/wp-content/uploads/2/Mercury-Planet.png"
        },
        {
          id:2,
          done: false,
          planetURL:
            "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/04/saturn-transparent-background-planet-1.png?fit=797%2C620"
        },
        {
          id:3,
          done: false,
          planetURL:
            "http://www.pngmart.com/files/3/Space-Planet-PNG-Transparent-Image.png"
        },
        {
          id:4,
          done: false,
          planetURL:
            "http://pngimg.com/uploads/mars_planet/mars_planet_PNG27.png"
        },
        {
          id:5,
          done: false,
          planetURL:
            "https://cdn.pixabay.com/photo/2018/10/22/01/00/blue-3764277_960_720.png"
        },
        {
          id:6,
          done: false,
          planetURL:
            "https://space-facts.com/wp-content/uploads/mars-transparent.png"
        },
        {
          id:7,
          done: true,
          planetURL:
            "https://space-facts.com/wp/wp-content/uploads/mercury-transparent.png"
        },
        {
          id:8,
          done: true,
          planetURL:
            "http://assets.stickpng.com/thumbs/5a00de530e8525eec2752fff.png"
        }
      ]
    };
  }

  render() {
    return (
      <div className="content-planet">
        {this.state.planetList.map((planetList, id) => (
        <ModalContent planetList={this.state.planetList}  />))}
        <div className="status">
          <span className={this.props.done ? "done" : "todo"}> </span>
        </div>
      </div>
    );
  }
}

export default SolarSystem;