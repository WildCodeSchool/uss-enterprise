import React from "./node_modules/react";
import "./HomePage.css";
import planet from "./earth.png";
import saturn from "./saturn.png";

const HomePage = () => {
  //-- obtenir une liste de planetes pour afficher random ;)

  return (
    <div className="home-page">
      <div className="animation-container">
        <h1 className="game-title">Wild Space Odyssey</h1>
      </div>

      <button className="circle-button">Start</button>

      <div className="planet-picture-div">
        <img className="earth-picture" src={planet} alt="planet" />
        <img className="saturn-picture" src={saturn} alt="planet" />
      </div>

      <footer className="footer">
        <p>
          Wild Code School <br />
          Adrien, Eduardo, François, Sergio
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
