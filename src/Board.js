import React, { Component } from 'react';
import { PlayingField } from './PlayingField';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PlayingField rounds={this.props.rounds} />
                <div>Code Peg Bank</div>
            </React.Fragment>
        )
    }
}

export { Board };
