import React, { Component } from 'react';
import { Guess } from './Guess.js';

class Round extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Guess />
                {/* <div>Round {this.props.roundNumber}</div> */}
            </React.Fragment>
        )
    }
}

export { Round };