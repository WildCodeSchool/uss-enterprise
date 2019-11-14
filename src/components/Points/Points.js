import React from "react";
import "./Points.css"


const Points = ({ points , NumberTry }) => {
    return (

        <div className="points">
            
            <p>{points} Points</p>
            <p>{NumberTry} tentatives </p> 
        </div>
    )

}

export default Points
