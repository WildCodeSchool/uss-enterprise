import React from "react";
import "./navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <ul className="ul-nav">
          <li className="cadet-name-nav">
            &#10026; [Your name] - [Name or niveau]
          </li>
          <li className="lifes-li-nav">
            <li className="life-on-nav">&#10084;</li>
            <li className="life-on-nav">&#10084;</li>
            <li className="life-off-nav">&#10084;</li>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
