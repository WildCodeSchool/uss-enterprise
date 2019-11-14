import React from "react";
import "./NavBar.css";

const NavBar = ({ points, name }) => {
  return (

    <div className="nav-bar">
      <ul className="ul-nav">
        <li className="gameTitle">
          Wild space odyssey
        </li>
        <li className="cadet-name-nav">
          <div>
            <span className="icon">
            &#10026;
            </span>
            {`     ${name} -   Points:  ${points}`}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
