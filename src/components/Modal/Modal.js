import React from "react";
import "./Modal.css";
import palpatineSound from "./sound/palpatine.mp3";
import yodaSound from "./sound/Yoda.mp3";
import classNames from "classnames";

const Modal = ({ show, close, result }) => {
  const data = result
    ? {
        image:
          "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png",
        alt: "Yoda",
        sound: yodaSound
      }
    : {
        image:
          "https://1.bp.blogspot.com/-6q8dKdCyYWs/XHFN1z41VQI/AAAAAAAAdMI/PnFkD3RBn_waSGpXFz4WFqLYr1EdIMS9ACLcBGAs/s1600/emperor-palpatine-deluxe-version_star-wars_silo.png",
        alt: "Palpatine",
        sound: palpatineSound
      };

  return (
    <div className="ContentPicModalOff">
      <div
        className={classNames("modal-wrapper", { "modal-wrapper-shown": show })}
      >
        {show && (
          <div>
            <img className="herosModal" src={data.image} alt={data.alt}></img>
            <audio autoPlay>
              <source src={data.sound} type="audio/mpeg" />
            </audio>
          </div>
        )}

        <div className="modal-body">
          {result ? (
            <p>
              CoNGRaTuLaTioN !!! <br />
              galaxy can still be saved !!!
            </p>
          ) : (
            <p>
              Bad aNswer !!! <br /> join the dark side of the Force !!!
            </p>
          )}
        </div>

        <div className="modal-footer">
          {result ? (
              <button className="btn-continue">continue</button>
           ) : (
            <button className="btn-cancel" onClick={close}>
              close
            </button>
            
           )}
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
