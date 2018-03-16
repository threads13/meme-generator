import React, { Component } from 'react';
import Image from './components/image';
import Captions from './components/captions';
import './App.css';

class App extends Component {
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

export default App;
