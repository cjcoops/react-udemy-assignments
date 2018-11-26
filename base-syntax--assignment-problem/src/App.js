import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Ken'
  };

  nameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username}
          change={this.nameChangeHandler}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
