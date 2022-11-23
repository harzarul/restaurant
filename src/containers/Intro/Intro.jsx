import React, {useState, useRef} from 'react';
import './Intro.scss';
import {BsPlayCircle, BsPauseFill} from 'react-icons/bs';
import {video} from '../../constants';

const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();

  return (
    <>
    <div className="app__video">
      <video src={video} ref={vidRef} type='video/mp4' loop controls={false} muted/>

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlay(!play);
            if(play){
              vidRef.current.pause();
            } else{
              vidRef.current.play();
            }
          }}>
        
          {play ? (<BsPauseFill/>) : (<BsPlayCircle/>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Intro