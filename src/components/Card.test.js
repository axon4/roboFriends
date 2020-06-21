import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('Renders Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});