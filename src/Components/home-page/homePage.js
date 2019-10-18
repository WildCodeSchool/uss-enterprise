import React from 'react';
import './homePage.css'

const HomePage= () =>{
    //--obtenir une liste de planetes pour afficher random ;)
    const planet = require('../img/Saturnx.png');
    return (
    <div className="space-container">

        <div className='animation-container'>
            <h1 className="game-title">{`Space \n Adventure`}</h1>
        </div>

        <div className="round-button">
            <div className="round-button-circle">
                <a href="#" className="round-button">START</a>
            </div>
        </div>

       
        <img className="planet-picture" src={planet} alt='planet'/>
       
        <footer className="footer">
            <p>Projet pour la Wild Code School</p>
        </footer>

    </div>);
}

export default HomePage;