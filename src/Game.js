import React, { Component } from 'react';
import { Setup } from './Setup.js'
import { Board } from './Board.js'

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
            board = <Board rounds={Number(this.state.rounds)}/>
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