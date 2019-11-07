import React from "react";
import "./HomePage.css";
import planet from "./earth.png";
import saturn from "./saturn.png";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> test/feature/facts-nasa

const HomePage = () => {
  //-- obtenir une liste de planetes pour afficher random ;)

  return (
    <div className="home-page">
      <div className="animation-container">
        <h1 className="game-title">Wild Space Odyssey</h1>
      </div>

<<<<<<< HEAD
      <button className="circle-button">Start</button>
=======
      <Link to="/quizz" className="circle-button">Start</Link>
>>>>>>> test/feature/facts-nasa

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
