import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: []
        }
        console.log(`Created new game with ${this.props.rounds} rounds`);
    }

    render() {
        return (
            <div>{`Created new game with ${this.props.rounds} rounds`}</div>
        )
    }
}

export { Game };