import React, { Component } from 'react';
import { PlayingField } from './PlayingField';
import { CodePegBank } from './CodePegBank';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PlayingField rounds={this.props.rounds} />
                <CodePegBank />
            </React.Fragment>
        )
    }
}

export { Board };
