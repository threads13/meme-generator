import React, { Component } from 'react';
import GeneratedMeme from './generated_meme';

class GeneratorInput extends Component {
  constructor(props){
    super(props);

    const { topLineInput } = this.props;

    this.state = ({
      topLineInput: '',
      bottomLineInput: '',
      imageURLInput: ''
    });
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


  // onSubmit
  // can pass in the props on onSubmit
  // topLine={this.state.topLine}
  // bottomLine={this.state.bottomLine}
  // imapeURL={this.state.imageURL}

  // it may be as simle as i need some state for both the form and the sdisplay

  // still wonder if i should just handle state in the app components
  // and then pass down the input as props where the image and Captions
  // can then be rendered

  handleSubmit(e){
    e.preventDefault();
    const { topLineInput, bottomLineInput, imageInput, topLineDisplay, bottomLineDiplay, imageDisplay } = this.state;

    this.props.onSave([
      topLineInput,
      bottomLineInput,
      imageInput
    ]);

    this.setState({
      topLineInput: '',
      bottomLIiput: '',
      imageInput: ''
    });
  }

  //let's try 3 diffrent functions one for each handle method
  // just to rule out that something
  //is wrong

  // maybe something is wrong with havind 2 things of state?

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    const { topLineInput, bottomLineInput, imageInput } = this.state;

    return (
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
            name="imageUrlInput"
            placeholder="Image URL"
            value={imageInput}
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

export default GeneratorInput;
