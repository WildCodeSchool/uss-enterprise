import React, { Component } from "react";
import "./App.css";
import IntroPage from "./components/IntroPage/IntroPage";
import HomePage from "./components/HomePage/HomePage";
import Quizz from "./components/Quizz/Quizz";
import FactsNasa from "./components/FactsNasa/FactsNasa";
import { Route } from "react-router-dom";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  state = {
    points: 0
  };

  calcPoints = (questionResult, difficulty) => {
    difficulty === "easy"
      ? this.setState({ points: this.state.points + 100 })
      : difficulty === "medium"
      ? this.setState({ points: this.state.points + 200 })
      : difficulty === "hard"
      ? this.setState({ points: this.state.points + 300 })
      : console.log("je sait pas quoi faire");
  };

  render() {
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
                <NavBar />
                <SolarSystem />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/quizz">
          <Quizz points={this.state.points} />
        </Route>
        <Route path="/nasa">
          <FactsNasa />
        </Route>
      </div>
    );
  }
}
export default App;
