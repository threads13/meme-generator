import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import GeneratedMeme from './components/generated_meme';
import GeneratorInput from './components/generator_input';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));registerServiceWorker();
