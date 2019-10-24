import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Quizz from './components/Quizz/Quizz';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <NavBar />
        <HomePage />
      </Route>
      <Route path="/quizz">
        <Quizz />
      </Route>
    </div>
  );
}

export default App;
