import React from 'react';
import { shallow } from 'enzyme';
import CountButton from './CountButton';

it('Renders Count Button component', () => {
    const mockColour = 'red';
    expect(shallow(<CountButton colour={mockColour} />)).toMatchSnapshot();
});

it('Correctly increments counter', () => {
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