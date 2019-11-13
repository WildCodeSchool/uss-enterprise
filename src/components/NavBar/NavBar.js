import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="ul-nav">
        <li className="cadet-name-nav">
          &#10026; [Your name] - [Name or niveau]
        </li>
        <div className="lifes-li-nav">
          <li className="life-on-nav">&#10084;</li>
          <li className="life-on-nav">&#10084;</li>
          <li className="life-off-nav">&#10084;</li>
        </div>
      </ul>
    </div>
  );
};
export default NavBar;
