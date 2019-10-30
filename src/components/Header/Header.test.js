import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});