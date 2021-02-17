import React from 'react';
import { shallow } from 'enzyme';
import CountButton from './CountButton';

it('render CountButton', () => {
	const mockColour = 'red';

	expect(shallow(<CountButton colour={mockColour} />)).toMatchSnapshot();
});

it('increment counter correctly', () => {
	const mockColour = 'green';
	const wrapper = shallow(<CountButton colour={mockColour} />);

	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');

	expect(wrapper.state()).toEqual({count: 2});

	wrapper.find('[id="counter"]').simulate('click');

	expect(wrapper.state()).toEqual({count: 3});

	wrapper.find('[id="counter"]').simulate('keypress');

	expect(wrapper.state()).toEqual({count: 3});
	expect(wrapper.props().colour).toEqual('green');
});