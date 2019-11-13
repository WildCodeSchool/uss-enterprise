import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Quizz from "./components/Quizz/Quizz";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    points: 0,
    difficultyIsChoose: false
  };

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
    return (
      <div className="App">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/quizz">
          <Quizz
            points={this.state.points}
            calcPoints={this.calcPoints}
            givePoints={this.givePoints}
            difficultyIsChoose={this.state.difficultyIsChoose}
          />
        </Route>
      </div>
    );
  }
}
export default App;
