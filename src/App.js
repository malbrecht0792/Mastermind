import React, { Component } from 'react';
import './App.css';
import { Setup } from './setup.js'
import { Game } from './game.js';

class App extends Component {
  constructor() {
      super();
      this.state = {
          selectedOption: "10",
          newGame: false
      }

      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleOptionChange(selectedOption) {
      this.setState(
          {selectedOption: selectedOption}
      )
  }

  handleFormSubmit() {
    console.log('You have selected:', this.state.selectedOption);
    this.setState(
      {newGame: true}
    )
  }

  render() {
    let game = <div></div>
    if(this.state.newGame) {
      game = <Game rounds={this.state.selectedOption} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mastermind</h1>
        </header>
        <Setup selectedOption={this.state.selectedOption}
               handleOptionChange={this.handleOptionChange}
               handleFormSubmit={this.handleFormSubmit} />
        {game}
      </div>
    );
  }
}

export default App;
