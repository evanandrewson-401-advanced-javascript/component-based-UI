import React from 'react';
import { shallow } from 'enzyme';
import List from './List.js';
import characters from '../../data';
import Character from '../Character/Character'

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List 
      itemsArray={characters}
      Component={Character}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});