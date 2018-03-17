import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GeneratedMeme from './generated_meme';

class Generator extends Component {
  constructor(props){
    super(props);

    this.state = ({
      topLine: '',
      bottomLine: '',
      imageURL: ''
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTopLineChange(input){
    this.setState({
      topLine: input
    });
  }

  onBottomLineChange(input){
    this.setState({
      bottomLine: input
    });
  }

  onUrlChange(input){
    this.setState({
      imageURL: input
    });
  }

  // onSubmit
  // can pass in the props on onSubmit
  // topLine={this.state.topLine}
  // bottomLine={this.state.bottomLine}
  // imapeURL={this.state.imageURL}

  handleSubmit(e){
    e.preventDefault();
    <GeneratedMeme
      topLine={this.state.topLine}
      bottomLine={this.state.bottomLine}
      inageURL={this.state.imageURL}
    />
  }

  render(){
    return (
      <div className="generator">
        <h3>Generate Your Own Meme!!!</h3>
        <form
          onSubmit={this.handleSubmit}
          className="form-group"
          >
          <input
            type="text"
            name="topLine"
            placeholder="Top Line"
            value={this.state.topLine}
            onChange={event => this.onTopLineChange(event.target.value)}
          />
          <input
            type="text"
            name="bottomLine"
            placeholder="Bottom Line"
            value={this.state.bottomLine}
            onChange={event => this.onBottomLineChange(event.target.value)}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={this.state.imageURL}
            onChange={event => this.onUrlChange(event.target.value)}
          />
          <button>Create Meme!!!</button>
          {/* could i try to just make the button actually a link components
          from react router, and style it like a button? */}
          <Link
            to="/generated_meme"
            topLine={this.state.topLine}
            bottomLine={this.state.bottomLine}
            inageURL={this.state.imageURL}
          >
            Link to memu
          </Link>
        </form>
      </div>
    );
  }
}

export default Generator;
