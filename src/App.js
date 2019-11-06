import React from "react";
import "./App.css";
import SolarSystem from "./Components/map_progression/SolarSystem/SolarSystem.js";


function App() {
  return (
    <div className="App">
      <div className="stars">
        <div className="twinkling">
          <div className="clouds">
            <SolarSystem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
