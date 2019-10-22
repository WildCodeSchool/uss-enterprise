import React , {Component} from 'react';
import './PropositionsQuizz.css'


class PropositionsQuizz extends Component {

    
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
            onClick: !this.state.onClick
       })}

    Message(){
        
        if (this.state.resultatQuestion){
        let msgVictoire="SUPER !!! Vous Avez donné la Bonne Réponse !!!";
        
        alert(msgVictoire);
        } else   {
        let msgDefaite=`PERDU !!! La Bonne Réponse était "${this.props.bonneReponse}" `;
        
        alert(msgDefaite);
                }}

   

    GetReponses(){
        let bonneRep = <p onClick={ (e) => {this.bonneReponse()
            this.state.onClick ? e.currentTarget.style.backgroundColor = "rgba(20, 216, 20, 0.774)"  
                : e.currentTarget.style.backgroundColor = null;;
            }}
            className={'proposition' }
            key={4}
            >
            {this.props.bonneReponse}
            </p>
        
        let propositionReponses = []
        
        if (this.props.mauvaiseReponse){
            propositionReponses = this.props.mauvaiseReponse.map((reponseFausse, index) =>
                <p onClick={ e => {this.mauvaiseReponse()
                    this.state.onClick 
                    ? e.currentTarget.style.backgroundColor = "rgba(20, 216, 20, 0.774)"
                    : e.currentTarget.style.backgroundColor = null;
                    console.log(this.state.onClick)
                    ;}}
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
                <div>
                    {this.GetReponses()}
                </div>
                    <button onClick={() => this.Message() } className='buttonQuizz'>Valid your answer</button>
            </div>
        )}
}


export default PropositionsQuizz