import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GeneratedMeme from './generated_meme';
import Generator from './components/generator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/generated_meme" component={GeneratedMeme} />
      <Route path="/generator" component={Generator} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
