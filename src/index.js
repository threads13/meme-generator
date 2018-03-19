import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import GeneratedMeme from './components/generated_meme';
import Generator from './components/generator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));registerServiceWorker();
