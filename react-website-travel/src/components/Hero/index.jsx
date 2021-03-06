import React from 'react';

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '../Button';

import "../../App.css";
import "./styles.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      
      <div className="hero-btns">
        <Button 
          className='btns' 
          buttonStyle='btn--outline' 
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

        <Button 
          className='btns' 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} />
        </Button>


      </div>
    </div>
  );
}

export default Hero;