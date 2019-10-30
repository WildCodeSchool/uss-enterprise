import React from "react";
import "./App.css";
import SolarSystem from "./Components/map_progression/SolarSystem.js";

function App() {
  return (
    <div className="App">
      <div className="stars">
        <div className="twinkling">
          <div className="clouds">
            <SolarSystem planetURL="http://www.pngall.com/wp-content/uploads/2/Mercury-Planet.png" />
            <SolarSystem planetURL="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/04/saturn-transparent-background-planet-1.png?fit=797%2C620" />
            <SolarSystem planetURL="http://www.pngmart.com/files/3/Space-Planet-PNG-Transparent-Image.png" />
            <SolarSystem planetURL="http://pngimg.com/uploads/mars_planet/mars_planet_PNG27.png" />
            <SolarSystem planetURL="https://cdn.pixabay.com/photo/2018/10/22/01/00/blue-3764277_960_720.png" />
            <SolarSystem planetURL="https://space-facts.com/wp-content/uploads/mars-transparent.png" />
            <SolarSystem planetURL="https://space-facts.com/wp/wp-content/uploads/mercury-transparent.png" done/>
            <SolarSystem planetURL="http://assets.stickpng.com/thumbs/5a00de530e8525eec2752fff.png" done/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
