import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('Renders CardList component', () => {
    const mockRobots = [{
        id: 1,
        name: 'Lucky',
        username: 'Xfearior',
        email: 'domluc@gmail.com'
    }];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});