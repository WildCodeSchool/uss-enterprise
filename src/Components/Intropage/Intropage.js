import React from 'react'
import './Intropage.css';

const alien=require('../img/Alien.png')

function Intropage() {
  return (
    <div className ='alien_container'>
      <div className='bubble_text_container'>
        <div className='bubble_text'>
        <p className="hello_text">Hello ! I'm YODA, your guide.
        Travel from planets to planets, answer the questions to complete your journey <br></br><br></br>
        READY ARE YOU? GO !</p> 
        <p className="tell_name"> But if beguin you want, first your name you need to tell me</p>
      </div>
      </div>
      <div>
        <img src={alien} className='alien'></img>
      </div>
      <div className="form_container">
      <form method="post" action="traitement.php" >
        <p>
          <label className="label"> </label>  <input class="player_form" type="text" placeholder="your name" name="pseudo" />
        </p>
      </form>
      </div>
      <div className="button_container">
      <button className="button">
        GO
      </button>
      </div>
    </div>
  )
}

export default Intropage;


