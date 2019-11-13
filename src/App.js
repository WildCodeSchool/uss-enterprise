import React from 'react';
import './App.css';
import IntroPage from './components/IntroPage/IntroPage'
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import FactsNasa from './components/FactsNasa/FactsNasa';
import { Route } from 'react-router-dom';
import SolarSystem from "./components/SolarSystem/SolarSystem";


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/intro">
        <IntroPage />
      </Route>
      <Route path="/map">
        <div className="stars">
          <div className="twinkling">
            <div className="clouds">
              <SolarSystem />
            </div>
          </div>
        </div>
      </Route>
      <Route path="/quizz">
        <Quizz />
      </Route>
      <Route path="/nasa">
        <FactsNasa />
      </Route>
    </div>
  );
}

export default App;
