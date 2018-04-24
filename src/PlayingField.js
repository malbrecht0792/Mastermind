import React, { Component } from 'react';
import { Round } from './Round.js'

class PlayingField extends Component {
    generateRounds() {
        let rounds = [];
        for (let i = 0; i < this.props.board.length; i++) {
            rounds.push(<Round key={i} round={this.props.board[i]} removeActiveCodePegColorClass={this.props.removeActiveCodePegColorClass} />);
        }
        return rounds;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.generateRounds()}
                </div>
            </React.Fragment>
        )
    }
}

export { PlayingField };