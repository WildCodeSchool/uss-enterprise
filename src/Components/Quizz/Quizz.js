import React from 'react';
import './Quizz.css';
import StarsQuizz from './StarsQuizz';
import PropositionsQuizz from './PropositionsQuizz';



class Quizz extends React.Component {
    
    state = {
        question: null,
        correct_answer: null,
        incorrect_answers: null,
   
    }

    getQuestions(){
        fetch("https://opentdb.com/api.php?amount=20&category=11&difficulty=easy")
        .then(res => res.json())
        .then(res => this.setState({ ...res.results[0] }))
    }

    componentDidMount(){
        this.getQuestions()
    }

    
    
    render() {
        const {question, difficulty,correct_answer,incorrect_answers} = this.state;
        
        return (
        
            <div className='contentQuizz '>
                <h1 className='titleQuizz text-focus-in'>Voici la Question :</h1>
                <p className='questionQuizz'>{question}</p>
                <div className='zoneReponse'>
                    <PropositionsQuizz bonneReponse={correct_answer} mauvaiseReponse={incorrect_answers} />
                </div>
                    <StarsQuizz difficulty={difficulty} />
                    
            </div>
        )}}


export default Quizz