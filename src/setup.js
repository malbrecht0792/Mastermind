import React, { Component } from 'react';

class Setup extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: "8"
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleOptionChange(e) {
        this.setState(
            {selectedOption: e.target.value}
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();

        console.log('You have selected:', this.state.selectedOption);
    }
    
    render() {
        return (
            <React.Fragment>
                <div>Rounds</div>
                <form onSubmit={this.handleFormSubmit}>
                    <span className="radio">
                        <label>
                            <input type="radio" value="8"
                                   checked={this.state.selectedOption === "8"}
                                   onChange={this.handleOptionChange} />
                            8
                        </label>
                    </span>
                    <span className="radio">
                        <label>
                            <input type="radio" value="10"
                            checked={this.state.selectedOption === "10"}
                            onChange={this.handleOptionChange} />
                            10
                        </label>
                    </span>
                    <span className="radio">
                        <label>
                            <input type="radio" value="12"
                            checked={this.state.selectedOption === "12"}
                            onChange={this.handleOptionChange} />
                            12
                        </label>
                    </span>
                    <button className="btn btn-default" type="submit">New Game</button>
                </form>
            </React.Fragment>
        )
    }
}

export { Setup }