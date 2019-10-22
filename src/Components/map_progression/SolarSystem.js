import React from 'react';
import "./solarSystem.css";
import ClickModal from './ClickModal';

function SolarSystem({planetURL}) {
    return (
      <div className="container">
        <button type="button" id="planetclick" data-toggle="modal" data-target="#exampleModal"><img className="planets" src={planetURL} ></img></button>
        <ClickModal />
      </div>
    )
}

export default SolarSystem;