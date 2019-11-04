import React from 'react';
import './App.css';
<<<<<<< HEAD
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import { Route } from 'react-router-dom';

=======
import FactsNasa from './components/FactsNasa/FactsNasa';
>>>>>>> Add component FactsNasa who reads the pictue of the day NASA, methode fetch

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
