import React, { Component } from 'react';
import Image from './image';
import Captions from './captions';
// import './App.css';
import './generated_meme.css';

// i am going to skip on the whole react router thing for now
// and instead build it all singe page, and do some animation
// to push the meme to the top of the page and resed state, and clear inputs

const GeneratedMeme = (props) =>  {
  const { topLineDisplay, bottomLineDisplay, imageDisplay} = props;

    return (
      <div className="generated-meme">
        <div>
          <Captions
            topLineDisplay={topLineDisplay}
            bottomLineDisplay={bottomLineDisplay}
          />
        </div>
        <Image imageDisplay={imageDisplay}/>

      </div>
    );

}

export default GeneratedMeme;
