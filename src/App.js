<<<<<<< HEAD
import React from 'react';
import IntroPage from './components/IntroPage/IntroPage';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import FactsNasa from './components/FactsNasa/FactsNasa';
import { Route } from 'react-router-dom';
import SolarSystem from './components/map_progression/SolarSystem/SolarSystem';
=======
import React from "react";
import "./App.css";
import SolarSystem from "./components/map_progression/SolarSystem/SolarSystem";
>>>>>>> f5345f3cdd30b564eaf81272ea6c534ba895a4c8


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
