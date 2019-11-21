import React from "react";
import WarpSpeed from "./WarpSpeed";
import "./Spacetravel.css";

class SpaceTravel extends React.Component {
  handleEvent = () => {
    //here we define different speeds for showing the effect
    //const lowSpeed = '"speed":0.7,"speedAdjFactor":0.03,"density":0.7,"shape":"circle","warpEffect":true,"warpEffectLength":5,"depthFade":true,"starSize":3,"backgroundColor":"hsl(263,45%,7%)","starColor":"#FFFFFF"';

    const x = new WarpSpeed("SpaceTravel__fond");
    x.SPEED = 100;
    x.BACKGROUND_COLOR = "hsl(0,0%,7%)";

    console.log(x);
  };

  componentDidMount() {
    this.handleEvent();
  }

  render() {
    return (
      <div className="Spacetravel">
        <canvas id="SpaceTravel__fond" className="SpaceTravel__fond" />
      </div>
    );
  }
}

export default SpaceTravel;
