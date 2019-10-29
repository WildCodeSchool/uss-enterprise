import React from 'react';
import IntroPage from './components/IntroPage/IntroPage'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import { Route } from 'react-router-dom';
import Info from './Components/Info/Info.js'
import Intropage from './Components/Intropage/Intropage.js'


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
        <Intropage/>
      </Route>
    </div>
    )
}

export default App;
