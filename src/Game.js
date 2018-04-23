import React, { Component } from 'react';
import { Setup } from './Setup.js'

class Game extends Component {

    constructor() {
        super();
        this.state = {
            rounds: "10",
            newGame: false,
            guesses: []
        }
  
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        console.log(`Created new game with ${this.state.rounds} rounds`);
    }
  
    handleOptionChange(selectedOption) {
        this.setState(
            {rounds: selectedOption}
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
            game = <div>{`Created new game with ${this.state.rounds} rounds`}</div>
        }
        return (
            <React.Fragment>
                <Setup selectedOption={this.state.rounds}
                       handleOptionChange={this.handleOptionChange}
                       handleFormSubmit={this.handleFormSubmit} />
                {game}
            </React.Fragment>
        )
    }
}

export { Game };