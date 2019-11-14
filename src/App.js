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
    points: 0,
    difficultyIsChoose: false,
    name: '' ,
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }


  calcPoints = (questionResult, difficulty, NumberTry) => {
    if (difficulty === "easy" && !questionResult) {
      this.setState({ points: this.state.points - 25 });
    } else if (difficulty === "medium" && !questionResult) {
      this.setState({ points: this.state.points - 50 });
    } else if (difficulty === "hard" && !questionResult) {
      this.setState({ points: this.state.points - 75 });
    }
  };

  givePoints = (difficulty, difficultyIsChoose) => {
    if (difficulty === "easy" && !difficultyIsChoose) {
      this.setState({ points: this.state.points + 50 });
      this.setState({ difficultyIsChoose: true });
    } else if (difficulty === "medium" && !difficultyIsChoose) {
      this.setState({ points: this.state.points + 100 });
      this.setState({ difficultyIsChoose: true });
    } else if (difficulty === "hard" && !difficultyIsChoose) {
      this.setState({ points: this.state.points + 150 });
      this.setState({ difficultyIsChoose: true });
    }
  };

  render() {
    const { points, name } = this.state;
    return (
      <div className="App">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/intro">
          <IntroPage handleChange={this.handleChange} name={this.state.name} />
        </Route>
        <Route path="/map">
          <div className="stars">
            <div className="twinkling">
              <div className="clouds">
                <NavBar points={points} name={name}/>
                <SolarSystem />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/quizz">
          <Quizz
            points={this.state.points}
            calcPoints={this.calcPoints}
            givePoints={this.givePoints}
            difficultyIsChoose={this.state.difficultyIsChoose}
            name={this.state.name}
          />
        </Route>
        <Route path="/nasa">
          <FactsNasa />
        </Route>
      </div>
    );
  }
}
export default App;
