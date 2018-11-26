import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    myInput: ''
  };

  changeInputHandler = event => {
    this.setState({
      myInput: event.target.value
    });
  };

  removeCharHandler = index => {
    const myInput = this.state.myInput.split('');
    myInput.splice(index, 1);

    this.setState({
      myInput: myInput.join('')
    });
  };

  render() {
    const chars = this.state.myInput
      .split('')
      .map((char, index) => (
        <Char
          letter={char}
          key={index}
          click={() => this.removeCharHandler(index)}
        />
      ));

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          onChange={this.changeInputHandler}
          type="text"
          value={this.state.myInput}
        />
        <p>{this.state.myInput}</p>
        <Validation word={this.state.myInput} />
        {chars}
      </div>
    );
  }
}

export default App;
