import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/quizz">
        <Quizz />
      </Route>
    </div>
  );
}

export default App;
