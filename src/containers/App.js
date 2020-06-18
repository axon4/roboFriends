import React, { Component} from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CountButton from '../components/CountButton';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    };

    render() {
        const { searchField, isPending, robots, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ?
            <h1 className='tc'>Loading</h1> :
        (
            <div className='tc'>
                <Header />
                <CountButton />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);