import React, { Component } from 'react';
import './App.css';
import { Setup } from './setup.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mastermind</h1>
        </header>
        <Setup />
      </div>
    );
  }
}

export default App;
