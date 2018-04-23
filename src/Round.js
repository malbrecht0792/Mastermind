import React, { Component } from 'react';

class Round extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>Round {this.props.roundNumber}</div>
            </React.Fragment>
        )
    }
}

export { Round };