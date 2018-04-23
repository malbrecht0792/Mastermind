import React, { Component } from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);

        this.onOptionChange = this.onOptionChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onOptionChange(e) {
        let selectedOption = e.target.value

        this.props.handleOptionChange(selectedOption);
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.handleFormSubmit();
    }
    
    render() {
        return (
            <React.Fragment>
                <div>Rounds</div>
                <form onSubmit={this.onFormSubmit}>
                    <span className="radio">
                        <label>
                            <input type="radio" value="8"
                                   checked={this.props.selectedOption === "8"}
                                   onChange={this.onOptionChange} />
                            8
                        </label>
                    </span>
                    <span className="radio">
                        <label>
                            <input type="radio" value="10"
                            checked={this.props.selectedOption === "10"}
                            onChange={this.onOptionChange} />
                            10
                        </label>
                    </span>
                    <span className="radio">
                        <label>
                            <input type="radio" value="12"
                            checked={this.props.selectedOption === "12"}
                            onChange={this.onOptionChange} />
                            12
                        </label>
                    </span>
                    <button className="btn btn-default" type="submit">New Game</button>
                </form>
            </React.Fragment>
        )
    }
}

export { Setup };