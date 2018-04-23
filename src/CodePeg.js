import React, { Component } from 'react';

class CodePeg extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <span className={`code-peg ${this.props.colorClass}`}></span>  
        )
    }
 }

 export { CodePeg };