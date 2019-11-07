import React from 'react';
import IntroPage from './components/IntroPage/IntroPage'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import FactsNasa from './components/FactsNasa/FactsNasa';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/intro">
        <IntroPage />
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
