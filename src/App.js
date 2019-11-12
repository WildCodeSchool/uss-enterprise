import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Quizz from "./components/Quizz/Quizz";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    points: 0,
  };

  calcPoints = (questionResult, difficulty) => {
    difficulty === "easy" ? this.setState({ points: this.state.points + 100 }) 
    : difficulty === "medium" ? this.setState({ points: this.state.points + 200 }) 
    : difficulty === "hard" ? this.setState({ points: this.state.points + 300 })
    : console.log("je sait pas quoi faire")
    }

  

  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/quizz">
          <Quizz points={this.state.points} calcPoints={this.calcPoints} />
        </Route>
      </div>
    );
  }

}
export default App;
