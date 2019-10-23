import React from 'react';

import './Modal.css';

const modal = (props) => {

    
    return (
        <div className='ContentPicModalOff'>
            <p className='contentModalP'>
            stars WARS
            </p>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                 
                        {(props.show) && (props.resultat) 
                        ? <div>
                             <img className='palpatine' src='https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png' alt='yoda'></img> 
                             <audio autoPlay>
                                <source src="http://lecrame.free.fr/sonsstarwars/Yoda7.mp3" type="audio/mpeg"/>
                             </audio>
                            </div>
                        : <img className='palpatine' src='https://1.bp.blogspot.com/-6q8dKdCyYWs/XHFN1z41VQI/AAAAAAAAdMI/PnFkD3RBn_waSGpXFz4WFqLYr1EdIMS9ACLcBGAs/s1600/emperor-palpatine-deluxe-version_star-wars_silo.png' alt='anakine'></img>
}
                <div className="modal-header">
                    <h3>Résultat de votre Réponse</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                
                <div className="modal-body">
                        {props.children}
                
                </div>
            
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
            
        </div>
    )
}

export default modal;