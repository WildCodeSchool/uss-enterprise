import React from 'react';
import "./solarSystem.css";

function SolarSystem({planetURL}) {
    return (
      <div className="container">
            <button id="planetclick"><img className="planets" src={planetURL} ></img></button>
      </div>
    )
}

export default SolarSystem;