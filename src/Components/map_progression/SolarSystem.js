import React from 'react';
import "./solarSystem.css";
import ClickModal from './ClickModal';

function SolarSystem({planetURL, done}) {
    return (
      <div className="content-planet">
        <button type="button" id="planetclick" data-toggle="modal" data-target="#exampleModal"><img className="planets" src={planetURL} ></img></button>
        <div className="status">
            <span className={ done ? "done" : "todo"}></span>
        </div>
        <ClickModal />
      </div>
    )
}

export default SolarSystem;