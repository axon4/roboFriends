import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('render CardList', () => {
	const mockRobots = [{
		ID: 1,
		name: 'Dom',
		userName: 'Luc',
		eMail: 'domluc@gmail.com'
	}];

	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});