import React from 'react';
import '~video-react/dist/video-react.css';
import { Player } from 'video-react';


function Hyperspace() {
  return (
    <div className="video">
      
      <Player>
      <source src="src/videos/space.mp4" />
      </Player>
       
        </div>
  )
}

export default Hyperspace;

