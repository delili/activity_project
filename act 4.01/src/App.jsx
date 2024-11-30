import React, { Component } from 'react';
import './App.css';
import UserCountDisplay from './UserCountDisplay';
import LoginDisplay from './LoginDisplay';
import MessageDisplay from './MessageDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Messaging App</h1>
        <UserCountDisplay />
        <LoginDisplay />
        <MessageDisplay />
      </div>
    );
  }
}

export default App;
