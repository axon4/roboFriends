import React, { Component} from 'react';
import Header from './Header';
import CountButton from './CountButton';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import CardList from './CardList';
import Scroll from './Scroll';
// import { robots } from './robots';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    };

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const { isPending, robots, onSearchChange } = this.props;

        return isPending ?
            <h1 className='tc'>Loading</h1> :
        (
            <div className='tc'>
                <Header />
                <CountButton />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    };
}

export default MainPage;