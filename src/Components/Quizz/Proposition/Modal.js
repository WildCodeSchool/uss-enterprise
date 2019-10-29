import React from "react";

import "./Modal.css";
import PalpatineSon1 from "./sound/palpatine.mp3";
import YodaSon1 from "./sound/Yoda.mp3";

const modal = ({ show, close, children, resultat }) => {
  return (
    <div className="ContentPicModalOff">
      <p className="contentModalP">challenge 1</p>

      <div
        className="modal-wrapper"
        style={{
          transform: show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0"
        }}
      >
        {show && resultat ? (
          <div>
            <img
              className="herosModal"
              src="https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png"
              alt="yoda"
            ></img>
            <audio autoPlay>
              <source src={YodaSon1} type="audio/mpeg" />
            </audio>
          </div>
        ) : resultat === false && show ? (
          <div>
            <img
              className="herosModal"
              src="https://1.bp.blogspot.com/-6q8dKdCyYWs/XHFN1z41VQI/AAAAAAAAdMI/PnFkD3RBn_waSGpXFz4WFqLYr1EdIMS9ACLcBGAs/s1600/emperor-palpatine-deluxe-version_star-wars_silo.png"
              alt="palpatine"
            ></img>
            <audio autoPlay>
              <source src={PalpatineSon1} type="audio/mpeg" />
            </audio>
          </div>
        ) : (
          null
        )}

        <div className="modal-header">
          <h3 className="modal-header-title">Result of your answer</h3>
          <span className="close-modal-btn" onClick={close}>
            ×
          </span>
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={close}>
            close
          </button>
          <button className="btn-continue">continue</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
