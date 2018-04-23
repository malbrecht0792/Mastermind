import React, { Component } from 'react';
import { CodePeg } from './CodePeg';

class CodePegBank extends Component {
    constructor(props) {
        super(props);
    }

    generateCodePegBank() {
        let codePegBankColors = ["red-code-peg", "white-code-peg", "black-code-peg", "blue-code-peg", "yellow-code-peg", "green-code-peg"]
        let codePegBank = [];
        for (let i = 0; i < 6; i++) {
            codePegBank.push(<CodePeg key={i} colorClass={codePegBankColors[i]} />);
        }
        return codePegBank;
    }
    
    render() {
        return (
            <span>{this.generateCodePegBank()}</span>  
        )
    }
 }

 export { CodePegBank };