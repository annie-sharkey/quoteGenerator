import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote.js";

/*Another way to write state in a class component is without constructor, super, etc. 
Now you can actually just say state = { }; and React knows what that means.
You can use either but just so you know what's going on if you ever see it in code.
*/
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
/*
The fade part of this is really cool. Keep it in your project.
The following is just so you have this top of mind when designing for customers --
the fade might make it difficult to read the quote particularly for someone who is visually
impaired. 

I like how you chose to split your components / made the decision to pass fade, number,
and handleGenerate as props. Good structure. 
*/
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
