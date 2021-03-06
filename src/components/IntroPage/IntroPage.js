import React, { Component, Redirect } from "react";
import "./IntroPage.css";
import { Link } from "react-router-dom";
import image from "./Alien.png";

class IntroPage extends Component {
  constructor(props) {
    super();
    this.state = {shoulRedirect : false}
  
  }

  handleSubmit(event){
    this.setState({shoulRedirect : true})
    event.preventDefault();
  }

  render() {
    if (this.state.shoulRedirect){
      return <Redirect to ='/Map'></Redirect>
    }

    return (
      <div className="IntroPage">
        <div className="top_container">
          <div className="bubble_text_container">
            <div className="bubble_text">
              <div className="hello_text">
                <div className="yoda-guide">
                  Hello ! I'm YODA, your guide. Travel from planets to planets,
                  answer the questions to complete your journey
                </div>
                READY ARE YOU? GO !
              </div>
              <p className="tell_name">
                {" "}
                But if begin you want, first your name you need to tell me
              </p>
            </div>
          </div>
          <div className="alien_container">
            <img src={image} className="alien" alt="alien" />
          </div>
        </div>
        <div className="form_container">
          {/* <form method="post" className="player-form" onSubmit={(e) => this.props.value && this.handleSubmit(e)}> */}
          <form method="post" className="player-form" onSubmit={(e) => { e.preventDefault(); }}>
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
              </label>{" "}
            </div>

            <div className="button_container">
              <Link to="/map" className="button">
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
