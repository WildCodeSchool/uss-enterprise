import React from "react";
import "./HomePage.css";
import planet from "../img/earth.png";

const HomePage = () => {
  //-- obtenir une liste de planetes pour afficher random ;)

  return (
    <div className="home-page">
      <div className="animation-container">
        <h1 className="game-title">
          Space <br /> Adventure
        </h1>
      </div>

      <button className="circle-button">Start</button>

      <div className="planet-picture-div">
        <img className="planet-picture" src={planet} alt="planet" />
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
