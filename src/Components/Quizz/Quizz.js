import React from 'react';
import './Quizz.css';
import StarsQuizz from './StarsQuizz';


class Quizz extends React.Component {
    
    state = {
        question: null,
        correct_answer: null,
        incorrect_answers: null,
        resultQuestion: null,
        isValid: null
    }

    getQuestions(){
        fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=hard")
        .then(res => res.json())
        .then(res => this.setState({ ...res.results[0] }))
    }

    componentDidMount(){
        this.getQuestions()
    }

    bonneReponse() {
        this.setState({
            resultQuestion : true,
            isValid : "validé",
    })}

    mauvaiseReponse() {
        this.setState({
            resultQuestion : false,
            isValid : "pas validé"})
    }

    Message(){
        if (this.state.resultQuestion === true){
        let msgVictoire="SUPER !!! Vous Avez donné la Bonne Réponse !!!";
        alert(msgVictoire);
        }else   {
        let msgDefaite=`PERDU !!! La Bonne Réponse était "${this.state.correct_answer}" `;
        alert(msgDefaite);
                }}

    GetReponses(){
        let bonneRep = <p onClick={() => this.bonneReponse()} className='proposition' key={4}>{this.state.correct_answer}</p>
        let propositionReponses = []
        
        if (this.state.incorrect_answers){
            propositionReponses = this.state.incorrect_answers.map((reponseFausse, index) =>
                <p onClick={() => this.mauvaiseReponse() } className='proposition' key={index}>
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

    
    render() {
        const {question, difficulty} = this.state;
        
        return (
        
            <div className='contentQuizz'>
                {this.state.isValid === 'validé' ? <div>gagné</div> : <div>perdu</div>}
                <h1 className='titleQuizz text-focus-in'>Voici la Question :</h1>
                <p className='questionQuizz'>{question}</p>
                <div className='zoneReponse'>
                    {this.GetReponses()}
                </div>
                    <button onClick={() => this.Message() } className='buttonQuizz'>Valider votre réponse</button>
                    <StarsQuizz difficulty={difficulty} /> 
                          
            </div>
        )}}


export default Quizz