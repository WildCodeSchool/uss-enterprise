import React, { Component } from 'react';
import './IntroPage.css';
import image from './Alien.png';


class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="IntroPage">
        <div className="top_container">
          <div className="bubble_text_container">
            <div className="bubble_text">
              <p className="hello_text">
                <div className="yoda-guide">
                  Hello ! I'm YODA, your guide. Travel from planets to planets,
                  answer the questions to complete your journey
                </div>
                READY ARE YOU? GO !
              </p>
              <p className="tell_name">
                {' '}
                But if beguin you want, first your name you need to tell me
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
              <label htmlFor="inputButton" className="label"></label>
              {' '}
              <input
                id="inputButton"
                value={this.state.value}
                onChange={this.handleChange}
                className="player-form-input"
                type="text"
                placeholder="Your Name"
                name="pseudo"
              />
            </div>
            <div className="button_container">
              <button className="button" type="submit">
                GO
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default IntroPage;
