import React, { Component } from 'react';
import { CodePeg } from './CodePeg';

class CodePegBank extends Component {
    constructor(props) {
        super(props);

        this.onCodePegClick = this.onCodePegClick.bind(this);
    } 

    generateCodePegBank() {
        let codePegBankColors = ["red-code-peg", "white-code-peg", "black-code-peg", "blue-code-peg", "yellow-code-peg", "green-code-peg"]
        let codePegBank = [];
        for (let i = 0; i < 6; i++) {
            codePegBank.push(<span onClick={this.onCodePegClick} key={i}><CodePeg key={i} colorClass={codePegBankColors[i]} /></span>);
        }
        return codePegBank;
    }

    onCodePegClick(e) {
        let colorClass = e.target.classList[1];
        this.props.updateActiveCodePegColorClass(colorClass);
    }
    
    render() {
        return (
            <span>{this.generateCodePegBank()}</span>  
        )
    }
 }

 export { CodePegBank };