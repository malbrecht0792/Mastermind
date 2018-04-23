import React, { Component } from 'react';
import { Guess } from './Guess.js';
import { Response } from './Response.js';

class Round extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                <Guess />
                <Response />
                </div>
                {/* <div>Round {this.props.roundNumber}</div> */}
            </React.Fragment>
        )
    }
}

export { Round };