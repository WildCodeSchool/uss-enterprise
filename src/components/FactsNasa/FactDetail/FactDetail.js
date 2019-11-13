import React from "react";
import "./FactDetail.css";
import { Link } from "react-router-dom";

const FactDetail = fact => {
  return (
    <div className="FactDetail">
      <h3 className="FactDetail__title">{fact.title}</h3>
      <img className="FactDetail__picture" src={fact.url} alt={fact.title} />
      <div className="FactDetail__description">
        <h4 className="FactDetail__suggest">
          <img
            src="https://img.icons8.com/office/50/000000/vulcan-head.png(3 ko)
https://img.icons8.com/office/50/000000/vulcan-head.png
"
            alt="hand"
          />
          Did you know?
        </h4>
        <p className="FactDetail__explanation">{fact.explanation}</p>
        <Link className="FactDetail__returnButton" to="/map">
          Retour
        </Link>
      </div>
    </div>
  );
};
export default FactDetail;
