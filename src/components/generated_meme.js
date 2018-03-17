import React, { Component } from 'react';
import Image from './image';
import Captions from './captions';
// import './App.css';
import './generated_meme.css';

class GeneratedMeme extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <Captions />
        </div>
        <Image />
      </div>
    );
  }
}

export default GeneratedMeme;
