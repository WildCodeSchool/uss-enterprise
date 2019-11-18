import React, { Component, Redirect } from "react";
import "./IntroPage.css";
import { Link } from "react-router-dom";
import image from "./Alien.png";

class IntroPage extends Component {
  constructor(props) {
    super();
    this.state = { shoulRedirect: false };
  }

  handleSubmit(event) {
    this.setState({ shoulRedirect: true });
    event.preventDefault();
  }

  render() {
    if (this.state.shoulRedirect) {
      return <Redirect to="/Map"></Redirect>;
    }

    return (
      <div className="IntroPage">
        <div className="yoda-text bubble_text">
          <p className="text-yoda"></p>
        </div>

        <div className="alien-container">
          <img src={image} className="alien" alt="alien" />
        </div>

        <div className="form_container">
          <form
            method="post"
            className="player-form"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="p_container">
              <label htmlFor="inputButton" className="label">
                <span className="sr-only">Name</span>
                <input
                  id="inputButton"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                  className="player-form-input"
                  type="text"
                  required="required"
                  placeholder="Your Name"
                  name="pseudo"
                />
              </label>
            </div>

            <div className="button-container-intro">
              <Link to="/map" className="button-intro">
                <span className="go_button"> GO </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default IntroPage;
