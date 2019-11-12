import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Quizz from './components/Quizz/Quizz';
import { Route } from 'react-router-dom';


class App extends Component {

  state = {
    points : 40,
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/quizz">
          <Quizz points={this.state.points} />
        </Route>
      </div>
    );

  }
}

export default App;
