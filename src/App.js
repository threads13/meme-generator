import React, { Component } from 'react';

import GeneratedMeme from './components/generated_meme';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      topLineDisplay: 'Age is just a number',
      bottomLineDisplay: 'False: Age is a word',
      imageDisplay: 'https://pbs.twimg.com/profile_images/1863312401/Dwight.jpg',
      topLineInput: '',
      bottomLineInput: '',
      imageInput: ''
    });
    // this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleSave(topLineReceivedInput, bottomLineReceivedInput, imageReceivedInput) {
  //   this.setState({
  //     topLineDisplay: topLineReceivedInput,
  //     bottomLineDisplay: bottomLineReceivedInput,
  //     imageDisplay: imageReceivedInput
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      topLineDisplay: this.state.topLineInput,
      bottomLineDisplay: this.state.bottomLineInput,
      imageDisplay: this.state.imageInput,
      topLineInput: '',
      bottomLineInput: '',
      imageInput: ''
    });
  }


  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const { topLineDisplay, bottomLineDisplay, imageDisplay } = this.state;
    const { topLineInput, bottomLineInput, imageInput } = this.state;

    return(
      <div className="app">
        <div className="generator">
          <h3>Generate Your Own Meme!!!</h3>
          <form
            onSubmit={this.handleSubmit}
            className="form-group"
            >
            <input
              type="text"
              name="topLineInput"
              placeholder="Top Line"
              value={topLineInput}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottomLineInput"
              placeholder="Bottom Line"
              value={bottomLineInput}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="imageInput"
              placeholder="Image URL"
              value={imageInput}
              onChange={this.handleChange}
            />
            <button>Create Meme!!!</button>
          </form>
        </div>
        <div>
          <GeneratedMeme
            topLineDisplay={topLineDisplay}
            bottomLineDisplay={bottomLineDisplay}
            imageDisplay={imageDisplay}
          />
        </div>
      </div>

    );
  }
}

export default App;
