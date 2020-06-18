import React, { Component } from 'react';

class CountButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        } else {
            return false;
        };
    };

    updateCount = () => {
        this.setState(state => {
            return {count: state.count + 1};
        });
    };

    render() {
        return (
            <button onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    };
};

export default CountButton;