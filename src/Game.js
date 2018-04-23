import React, { Component } from 'react';
import { Setup } from './Setup.js'

class Game extends Component {

    constructor() {
        super();
        this.state = {
            rounds: "8",
            newGame: false,
            guesses: []
        }
  
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleOptionChange(selectedOption) {
        this.setState(
            {rounds: selectedOption}
        )
    }
  
    handleFormSubmit() {
      this.setState(
        {newGame: true}
      )
    }

    render() {
        let board = <div></div>
        if(this.state.newGame) {
            board = <div>{`Created a board with ${this.state.rounds} rounds`}</div>
        }
        return (
            <React.Fragment>
                <Setup selectedOption={this.state.rounds}
                       handleOptionChange={this.handleOptionChange}
                       handleFormSubmit={this.handleFormSubmit} />
                {board}
            </React.Fragment>
        )
    }
}

export { Game };