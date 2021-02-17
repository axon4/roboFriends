import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('render Card', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
});