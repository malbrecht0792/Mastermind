import React, { Component } from 'react';
import { CodePeg } from './CodePeg';


class Guess extends Component {
    constructor(props) {
        super(props);
    }

    generateCodePegs() {
        let codePegs = [];
        for (let i = 0; i < 4; i++) {
            codePegs.push(<CodePeg key={i} />);
        }
        return codePegs;
    }
    
    render() {
        return (
            <React.Fragment>
              <span>{this.generateCodePegs()}</span>  
            </React.Fragment>
        )
    }
 }

 export { Guess };