import React, { Component } from 'react';
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
    this.handleChange = this.handleChange.bind(this);
  }

  // onSubmit
  // can pass in the props on onSubmit
  // topLine={this.state.topLine}
  // bottomLine={this.state.bottomLine}
  // imapeURL={this.state.imageURL}

  handleSubmit(e){
    e.preventDefault();
    this.props.onSave([...this.state]);
    this.setState({
      topLine: '',
      bottomLine: '',
      imageURL: ''
    });
  }

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
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
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomLine"
            placeholder="Bottom Line"
            value={this.state.bottomLine}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="imageURL"
            placeholder="Image URL"
            value={this.state.imageURL}
            onChange={this.handleChange}
          />
          <button>Create Meme!!!</button>
          {/* could i try to just make the button actually a link components
          from react router, and style it like a button? */}
          {/* <div
            to="/generated_meme"
            topLine={this.state.topLine}
            bottomLine={this.state.bottomLine}
            inageURL={this.state.imageURL}
          >
            Link to memu
          </div> */}
        </form>
      </div>
    );
  }
}

export default Generator;
