import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../components/Section.css';
import video2 from '../videos/video-2.mp4'

function sectionSection() {
  return (
    <div className='section-container'>
      <video src={video2} autoPlay loop muted />
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Lost Something
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            Found Something
        </Button>
      </div>
    </div>
  );
}

export default sectionSection;
