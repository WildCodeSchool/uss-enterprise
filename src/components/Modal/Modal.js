import React from "react";
import "./Modal.css";
import PalpatineSon1 from "./sound/palpatine.mp3";
import YodaSon1 from "./sound/Yoda.mp3";
import classNames from 'classnames';

const Modal = ({ show, close, result }) => {
  return (
    <div className="ContentPicModalOff">
      <div
        className={classNames('modal-wrapper', { 'modal-wrapper-shown': show })}
      >
        {show && result ? (
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
        ) : result === false && show ? (
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
        ) : null}

        <div className="modal-body">
          {result ? (
            <p>
              CoNGRaTuLaTioN !!! <br /> votre réponse est bonne !!!
            </p>
          ) : (
            <p>
              NUL !!! <br /> Germain Nul Nul Nul
            </p>
          )}
        </div>

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

export default Modal;
