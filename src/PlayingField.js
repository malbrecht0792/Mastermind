import React, { Component } from 'react';

class PlayingField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>Playing Field with {this.props.rounds} Rounds</div>
            </React.Fragment>
        )
    }
}

export { PlayingField };