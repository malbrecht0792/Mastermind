import React, { Component } from 'react';
import { PlayingField } from './PlayingField';
import { CodePegBank } from './CodePegBank';

class Board extends Component {
    render() {
        return (
            <React.Fragment>
                <PlayingField rounds={this.props.rounds} board={this.props.board} removeActiveCodePegColorClass={this.props.removeActiveCodePegColorClass} />
                <CodePegBank updateActiveCodePegColorClass={this.props.updateActiveCodePegColorClass} />
            </React.Fragment>
        )
    }
}

export { Board };
