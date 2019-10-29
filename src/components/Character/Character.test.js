import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const character = {
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      };
    const wrapper = shallow(
    <Character
      name = {character.name}
      species = {character.species}
      image = {character.image}
       />);
    expect(wrapper).toMatchSnapshot();
  });
});