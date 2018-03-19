import React, { Component } from 'react';
import Generator from './components/generator';
import GeneratedMeme from './components/generated_meme';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({

        topLine: 'Age is just a number',
        bottomLine: 'False: Age is a word',
        imageURL: 'https://pbs.twimg.com/profile_images/1863312401/Dwight.jpg'

    });
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(topLine, bottomLine, imageURL){
    this.setState({
      topLine,
      bottomLine,
      imageURL
    });
  }

  render(){
    const { topLine, bottomLine, imageURL } = this.state;
    return(
      <div>
        <GeneratedMeme
          topLine={topLine}
          bottomLine={bottomLine}
          imageURL={imageURL}
        />
        <Generator onSave={this.handleSave}/>
        {/* put generated meme component in */}
      </div>
    );
  }
}

export default App;
