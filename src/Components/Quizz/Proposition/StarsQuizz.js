import React, { Component } from 'react';
import './StarsQuizz.css';

class StarsQuizz extends Component {

    state = {
        difficulty : 'easy'
    }

    render() {
        const difHard = <ul className='ulEtoile'><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoilePleine'></li>
        <li className='etoilePleine'></li><li className='etoilePleine'></li></ul>;

        const difMedium = <ul className='ulEtoile'><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoileMi'></li>
        <li className='etoileVide'></li><li className='etoileVide'></li></ul>;

        const difEasy = <ul className='ulEtoile'><li className='etoileVide'></li><li className='etoileVide'></li><li className='etoileVide'></li>
        <li className='etoileVide'></li><li className='etoileVide'></li></ul>;



        return (
            <>
            <select onChange={ (even) => this.setState({difficulty : even.target.value}) } className='selectDifficulty ' name="difficulty" id="difficulty-select">
                    <option value="">choose a difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
            </select> 
    
            <div className='divEtoile'>
            { this.state.difficulty === 'easy' && difEasy  }
            { this.state.difficulty === 'medium' && difMedium  }
            { this.state.difficulty === 'hard' && difHard  }
            </div>
            </>
         )} 
    }


export default StarsQuizz