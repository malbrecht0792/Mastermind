import React, { Component } from 'react';

class Setup extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: "8"
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(e) {
        this.setState(
            {selectedOption: e.target.value}
        )
    }
    
    render() {
        return (
            <React.Fragment>
                <div>Rounds</div>
                <form>
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
                </form>
            </React.Fragment>
        )
    }
}

export { Setup }