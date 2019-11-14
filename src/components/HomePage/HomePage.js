import React from "react";
import "./HomePage.css";
import planet from "./earth.png";
import saturn from "./saturn.png";
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="home-page">
      <div className="animation-container">
        <h1 className="game-title">Wild Space Odyssey</h1>
      </div>

      <Link to="/intro" className="circle-button">Start</Link>

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
