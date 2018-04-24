import React, { Component } from 'react';
import { Setup } from './Setup.js'
import { Board } from './Board.js'

class Game extends Component {

    constructor() {
        super();
        this.state = {
            rounds: "8",
            newGame: true,
            board: []
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.updateActiveCodePegColorClass = this.updateActiveCodePegColorClass.bind(this);
    }
  
    handleOptionChange(selectedOption) {
        this.setState(
            {rounds: selectedOption}
        )
    }
  
    handleFormSubmit() {
        let board = this.generateBoard();
        console.log(board);

        this.setState(
            {newGame: true,
                board: board}
        )
    }

    generateBoard() {
        let board = [];
        for (let i = 0; i < Number(this.state.rounds); i++) {
            let active = i === 0 ? true : false
            board.unshift(this.generateRound(i, active));
        }
        return board;
    }

    generateRound(id, activeRound) {
        return {
            id: id,
            codePegs: this.generateCodePegs(activeRound),
            keyPegs: this.generateKeyPegs(activeRound),
            active: activeRound
        }
    }

    generateCodePegs(activeRound) {
        let codePegs = [];
        for (let i = 0; i < 4; i++) {
            let active = false;
            if (activeRound) {
                active = i === 0 ? true : false
            }
            codePegs.push({id: i, colorClass: "code-peg", active: active});
        }
        return codePegs;
    }

    generateKeyPegs(activeRound) {
        let keyPegs = [];
        for (let i = 0; i < 4; i++) {
            keyPegs.push({id: i, colorClass: "key-peg"});
        }
        return keyPegs;
    }

    updateActiveCodePegColorClass(colorClass) {
        function filterByActive(item) {
            return item.active ? true : false
        }

        let board = this.state.board.slice();
        let activeRound = board.filter(filterByActive)[0];
        console.log(activeRound);
        let activeCodePeg = activeRound.codePegs.filter(filterByActive)[0];
        console.log(activeCodePeg);
        activeCodePeg.colorClass = colorClass;
        console.log(activeCodePeg);
        this.setState(
            {board: board}
        )
    }

    render() {
        let board = <div></div>
        if(this.state.newGame) {
            board = <Board rounds={Number(this.state.rounds)}
                           board={this.state.board}
                           updateActiveCodePegColorClass={this.updateActiveCodePegColorClass} />
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