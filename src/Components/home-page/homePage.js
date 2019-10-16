import React from 'react';
import './homePage.css'
const HomePage= () =>{
    return (
    <div>
        <h1>Game name</h1>
        <button>Start</button>
        <div>

        <img className="planet-picture" src="../img/Saturnx.png" alt='planet'/>
        </div>
        <footer>
            <p>Projet pour la Wild Code School</p>
        </footer>
    </div>);
}

export default HomePage;