import React from 'react';
import "./ClickModal.css";

class ClickModal extends React.Component {
    render(){
        return (
        <div classname="ClickName">
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">  
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                Êtes-vous sûr(e) de vouloir y aller ?
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Non</button>
                <button type="button" className="btn btn-primary">Oui !</button>
                </div>
            </div>
            </div>
        </div>
        </div>

        )
    }
}

export default ClickModal