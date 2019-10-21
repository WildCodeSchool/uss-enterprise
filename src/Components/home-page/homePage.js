import React from 'react';
import './homePage.css'

const HomePage= () =>{
    //--obtenir une liste de planetes pour afficher random ;)
    const planet = require('../img/5a00de530e8525eec2752fff.png');
    return (
    <div className="space-container">

        <div className='animation-container'>
            <h1 className="game-title">Space <br/>  Adventure</h1>
        </div>

        <div className="round-button">
            <div className="round-button-circle">
                <a href="#" className="round-button">START</a>
            </div>
        </div>

       <div className="planet-picture-div">
        <img className="planet-picture" src={planet} alt='planet'/>
       </div>

        <footer className="footer">
            <p>Wild Code School <br/>
            Adrien, Eduardo, François, Sergio</p>
        </footer>
       

    </div>);
}

export default HomePage;