import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import IntroPage from './components/IntroPage/IntroPage';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/quizz">
        <Quizz />
      </Route>
      <Route path="/intro">
        <IntroPage />
      </Route>
    </div>
  );
}

export default App;
