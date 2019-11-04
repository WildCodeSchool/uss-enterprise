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

            <ul className="divStars ">
                <li className='starsFull'></li>
                <li className={
                    difficulty === 'easy'
                        ? 'starsEmpty' : 'starsFull' }></li>
                <li className={
                    difficulty === 'easy'
                        ? 'starsEmpty'
                        : difficulty === 'medium'
                            ? 'starsHalf'
                            : 'starsFull'
                }></li>
                <li className={difficulty === 'hard' ? 'starsFull' : 'starsEmpty'}></li>
                <li className={difficulty === 'hard' ? 'starsFull' : 'starsEmpty'}></li>
            </ul>
        </>
     )
} 


export default StarsQuizz