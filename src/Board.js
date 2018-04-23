import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>Playing Field with {this.props.rounds} Rounds</div>
                <div>Code Peg Bank</div>
            </React.Fragment>
        )
    }
}

export { Board };
