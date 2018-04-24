import React, { Component } from 'react';
import { CodePeg } from './CodePeg';


class Guess extends Component {
    constructor(props) {
        super(props);

        this.onCodePegClick = this.onCodePegClick.bind(this);
    }

    generateCodePegs() {
        let codePegs = [];
        for (let i = 0; i < this.props.codePegs.length; i++) {
            codePegs.push(<span onClick={this.onCodePegClick} key={i}><CodePeg key={i} colorClass={this.props.codePegs[i].colorClass} /></span>);
        }
        return codePegs;
    }

    onCodePegClick(e) {
        // let colorClass = e.target.classList[1];
        this.props.removeActiveCodePegColorClass();
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