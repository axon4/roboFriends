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

it('render MainPage', () => {
	expect(wrapper).toMatchSnapshot();
});

it('filter robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		searchField: 'JA',
		robots: [{
			ID: 4,
			name: 'Jason',
			eMail: 'juju@gmail.com'
		}],
		isPending: false
	};

	const wrapper2 = shallow(<MainPage {...mockProps2} />);

	expect(wrapper2.instance().filterRobots()).toEqual([{
		ID: 4,
		name: 'Jason',
		eMail: 'juju@gmail.com'
	}]);
});

it('filter robots correctly 2', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		searchField: 'YSNB',
		robots: [{
			ID: 7,
			name: 'Jason',
			eMail: 'juju@gmail.com'
		}],
		isPending: false
	};

	const filteredRobots = [];
	const wrapper3 = shallow(<MainPage {...mockProps3} />);

	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});