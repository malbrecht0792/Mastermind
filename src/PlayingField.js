import React, { Component } from 'react';
import { Round } from './Round.js'

class PlayingField extends Component {
    constructor(props) {
        super(props);
    }

    generateRounds() {
        let rounds = [];
        for (let i = 0; i < this.props.rounds; i++) {
            rounds.unshift(<Round roundNumber={i + 1} key={i} />);
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