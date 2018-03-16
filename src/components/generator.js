import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Generator extends Component {
  constructor(props){
    super(props);

    this.state = ({
      topLine: '',
      bottomLine: '',
      imageURL: ''
    });
  }

  onTopLineChange(input){
    this.setState({
      topLine: input
    });
  }

  onMidleLineChange(input){
    this.setState({
      bottomLine: input
    });
  }

  onUrlChange(input){
    this.setState({
      imageURL: input
    });
  }

  render(){
    return (
      <div className="generator">
        <h3>Generate Your Own Meme!!!</h3>
        <form className="form-group">
          <input
            type="text"
            placeholder="Top Line"
            onChange={event => this.onTopLineChange(event.target.value)}
          />
          <input
            type="text"
            placeholder="Bottom Line"
            onChange={event => this.onBottomLineChange(event.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            onChange={event => this.onUrlChange(event.target.value)}
          />
          <button>Create Meme!!!</button>
        </form>
      </div>
    );
  }
}

export default Generator;
