import React , {Component} from 'react';
import './PropositionsQuizz.css';
import Modal from './Modal'


class PropositionsQuizz extends Component {


    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

        state = {
          resultatQuestion : null,
          onClick: true,
          
        }
      

    bonneReponse() {
        this.setState({
            resultatQuestion : true,
            onClick: !this.state.onClick

    },
    )}

    mauvaiseReponse() {
        this.setState({
            resultatQuestion : false,
            onClick: !this.state.onClick,
            
       })
    }


    GetReponses(){
        let bonneRep = <p onClick={ (e) => {this.bonneReponse()
            this.state.onClick ? e.currentTarget.style.backgroundColor = "rgb(249, 253, 18)" :
            e.currentTarget.style.backgroundColor = null 
            }}

            className={'proposition' }
            key={4}
            >
            {this.props.bonneReponse}
            </p>
        
        let propositionReponses = []
        console.log(this.state.onClick)
        
        if (this.props.mauvaiseReponse){
            propositionReponses = this.props.mauvaiseReponse.map((reponseFausse, index) =>
                <p onClick={ (e) => {this.mauvaiseReponse()
            this.state.onClick ? e.currentTarget.style.backgroundColor = "rgb(249, 253, 18)" :
            e.currentTarget.style.backgroundColor = null 
            }}
                    className='proposition' 
                    key={index} >
                    {reponseFausse}
                </p>
               )}

        propositionReponses.push(bonneRep);
        propositionReponses.sort(function(a,b) {
            if (a.props.children < b.props.children){
                return 1 
            }if (a.props.children > b.props.children) {
                return -1
            }
            return 0
        })
        return propositionReponses
    }

    render(){
        
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <div>
                    {this.GetReponses()}
                    <button className="open-modal-btn buttonQuizz" onClick={this.openModalHandler}>Validez Votre Réponse</button>
                
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    resultat={this.state.resultatQuestion}
                    >
                        {this.state.resultatQuestion ? <p>Félicitations !!! <br></br> Votre réponse est bonne !!!</p> :<p>NUL !!! <br></br> Germain Nul Nul Nul</p>}
                </Modal>
            </div>
            </div>
        )}
}


export default PropositionsQuizz