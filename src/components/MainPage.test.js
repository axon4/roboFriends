import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        searchField: '',
        robots: [],
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('Renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
});

it('Filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        searchField: 'JA',
        robots: [{
            id: 4,
            name: 'Jason',
            email: 'juju@gmail.com'
        }],
        isPending: false
    };

    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 4,
        name: 'Jason',
        email: 'juju@gmail.com'
    }]);
});

it('Filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        searchField: 'YS',
        robots: [{
            id: 7,
            name: 'Jason',
            email: 'juju@gmail.com'
        }],
        isPending: false
    };

    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});