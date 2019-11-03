import React from 'react';
import './StarsQuizz.css';

const StarsQuizz = ({ difficulty, changeDiffculty }) => {
    return (
        <>
            <select onChange={ changeDiffculty } className='selectDifficulty ' name="difficulty" id="difficulty-select">
                    <option value="">choose a difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
            </select> 

            <ul className="divEtoile ">
                <li className='etoilePleine'></li>
                <li className='etoilePleine'></li>
                <li className={
                    difficulty === 'easy'
                        ? 'etoileVide'
                        : difficulty === 'medium'
                            ? 'etoileMi'
                            : 'etoilePleine'
                }></li>
                <li className={difficulty === 'hard' ? 'etoilePleine' : 'etoileVide'}></li>
                <li className={difficulty === 'hard' ? 'etoilePleine' : 'etoileVide'}></li>
            </ul>
        </>
     )
} 


export default StarsQuizz