import React from "react";
import "./App.css";
import SolarSystem from "./components/map_progression/SolarSystem/SolarSystem";


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
