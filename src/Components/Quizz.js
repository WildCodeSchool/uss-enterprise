import React from 'react';
import './Quizz.css';


class Quizz extends React.Component {
    
    state = {
        question: null,
        correct_answer: null,
        incorrect_answers: null,
    }



    getPlanets = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=hard")
        .then(res => res.json())
        .then(res => this.setState({ ...res.results[0] }))
    }

    componentDidMount(){
       this.getPlanets()
    }

    

    render() {
        const {question, correct_answer,incorrect_answers,difficulty  } = this.state;
        let propositionRep = []
        let bonneRep = <p className='proposition'>{correct_answer}</p>
        let difficult
        
        
        if (incorrect_answers){
            propositionRep = incorrect_answers.map((reponse, index) =>
                <p className='proposition' key={index}>
                    {reponse}
                </p>
               )}

        if (difficulty === 'easy') {
            difficult =  <ul className='divEtoile'><li className='etoileVide'></li><li className='etoileVide'></li><li className='etoileVide'></li>
                            <li className='etoileVide'></li><li className='etoileVide'></li></ul>
        }


        if (difficulty === 'medium') {
            difficult =  <ul className='divEtoile'><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoileMi'></li>
                            <li className='etoileVide'></li><li className='etoileVide'></li></ul>
        }
         
        if (difficulty === 'hard') {
            difficult =  <ul className='divEtoile'><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoilePleine'></li>
                            <li className='etoilePleine'></li><li className='etoilePleine'></li></ul>
        }  
        



        return (
        
            <div className='contentQuizz'>
                <h1 className='titleQuizz text-focus-in'>Voici la Question :</h1>
                <p className='questionQuizz'>{question}</p>
                <div className='zoneReponse'>
                    {propositionRep}
                    {bonneRep}
                </div>
                    <button className='buttonQuizz'>Valider votre réponse</button>
                    {difficult}
            </div>
        
        )
    }
}


export default Quizz