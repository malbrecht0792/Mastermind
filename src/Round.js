import React, { Component } from 'react';
import { Guess } from './Guess.js';
import { Response } from './Response.js';

class Round extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Guess codePegs={this.props.round.codePegs} removeActiveCodePegColorClass={this.props.removeActiveCodePegColorClass}/>
                    <Response keyPegs={this.props.round.keyPegs} />
                </div>
            </React.Fragment>
        )
    }
}

export { Round };