import React, { Component } from 'react';
import './IntroPage.css';
import { Link } from 'react-router-dom';
import image from './Alien.png';


class IntroPage extends Component {
  constructor(props) {
    super();
  }

  
  render() {
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
                {' '}
                But if begin you want, first your name you need to tell me
              </p>
            </div>
          </div>
          <div className="alien_container">
            <img src={image} className="alien" alt="alien" />
          </div>
        </div>
        <div className="form_container">
          <form method="post" className="player-form">
            <div className="p_container">
              <label htmlFor="inputButton" className="label">
                <span className="sr-only">Name</span>
                <input
                  id="inputButton"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                  className="player-form-input"
                  type="text"
                  placeholder="Your Name"
                  name="pseudo"
                  required
                />
              </label>
              {' '}
            </div>
            <div className="button_container">
              <Link to="/map" className="button">
                GO
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default IntroPage;
