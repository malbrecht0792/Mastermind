import React, { Component } from 'react';
import { KeyPeg } from './KeyPeg';

class Response extends Component {
    constructor(props) {
        super(props);
    }
    
    generateKeyPegs() {
        let keyPegs = [];
        for (let i = 0; i < 4; i++) {
            keyPegs.push(<KeyPeg key={i} />);
        }
        return keyPegs;
    }

    render() {
        return (
            <React.Fragment>
                <span>
                    {this.generateKeyPegs()}
                </span>  
            </React.Fragment>
        )
    }
 }

 export { Response };