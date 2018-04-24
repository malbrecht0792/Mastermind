import React, { Component } from 'react';
import { CodePeg } from './CodePeg';


class Guess extends Component {
    generateCodePegs() {
        let codePegs = [];
        for (let i = 0; i < this.props.codePegs.length; i++) {
            codePegs.push(<CodePeg key={i} colorClass={this.props.codePegs[i].colorClass} />);
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