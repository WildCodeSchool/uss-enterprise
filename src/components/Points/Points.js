import React from "react";
import "./Points.css"


const Points = ({ points , NumberTry }) => {
    return (

        <div className="points">
            
            <p>vous avez {points} Points</p>
            <p>c'est votre {NumberTry} tentatives </p> 
        </div>
    )

}

export default Points
