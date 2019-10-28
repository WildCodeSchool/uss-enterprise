import React from 'react';

import './Modal.css';
import PalpatineSon1 from './sound/palpatine.mp3'
import YodaSon1 from './sound/Yoda.mp3'


const modal = (props) => {
    

    return (
        <div className='ContentPicModalOff'>
            <p className='contentModalP'  >
            Level 1
            </p>
            

            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                 
                {(props.show) && (props.resultat) 
                    ?   <div>
                            <img className='herosModal' src='https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdbe.png' alt='yoda'></img> 
                            <audio autoPlay>
                            <source src={YodaSon1} type="audio/mpeg"/>
                            </audio> 
                        </div>
                        
                    : (props.resultat === false) && (props.show) 
                    
                    ?   <div>
                            <img className='herosModal' src='https://1.bp.blogspot.com/-6q8dKdCyYWs/XHFN1z41VQI/AAAAAAAAdMI/PnFkD3RBn_waSGpXFz4WFqLYr1EdIMS9ACLcBGAs/s1600/emperor-palpatine-deluxe-version_star-wars_silo.png' alt='palpatine'></img> 
                            <audio autoPlay>
                            <source src={PalpatineSon1} type="audio/mpeg"/>
                            </audio> 
                        </div> 
                    : console.log('les conditions ne sont pas remplis')
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