import React from 'react';
import './StarsQuizz.css';

const StarsQuizz = ({difficulty}) => {

    const difHard = <ul><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoilePleine'></li>
    <li className='etoilePleine'></li><li className='etoilePleine'></li></ul>;
    const difMedium = <ul><li className='etoilePleine'></li><li className='etoilePleine'></li><li className='etoileMi'></li>
    <li className='etoileVide'></li><li className='etoileVide'></li></ul>
    const difEasy = <ul><li className='etoileVide'></li><li className='etoileVide'></li><li className='etoileVide'></li>
    <li className='etoileVide'></li><li className='etoileVide'></li></ul>

    

    return (
        <div className='divEtoile'>
        { difficulty === 'easy' ? difEasy : <p></p> }
        { difficulty === 'medium' ? difMedium : <p></p> }
        { difficulty === 'hard' ? difHard : <p></p> }
        </div>
     )} 


export default StarsQuizz