import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      fade: false
    }
  }

  handleGenerate = () => {
    var pastNum = this.state.number
    var randNum = Math.floor(Math.random() * 20);
    while (randNum == pastNum) {
      randNum = Math.floor(Math.random() * 20)
    }
    this.setState({
      number: randNum,
      fade: true
    })
  }

  render() {
    return (
      <div>
        <Quote
          number={this.state.number}
          fade={this.state.fade}
          handleGenerate={this.handleGenerate}
        />
      </div>
    );
  }
}

export default App;
