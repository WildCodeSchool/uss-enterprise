import React from "react";
import "./NavBar.css";

const NavBar = ({ points, name }) => {

  return (

    <div className="nav-bar">
      <ul className="ul-nav">
        <li className="cadet-name-nav">
          <div>
            &#10026;
            {`[${name}] -[Points:${points}]`}
          </div>
        </li>
        <li>
          <ul className="lifes-li-nav">
            <li className="life-on-nav">&#10084;</li>
            <li className="life-on-nav">&#10084;</li>
            <li className="life-off-nav">&#10084;</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
