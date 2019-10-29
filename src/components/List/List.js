import React from 'react';
import Character from '../Character/Character';
import PropTypes from 'prop-types';

const List = ({ itemsArray }) => (
  <ul>
    {itemsArray.map(item => 
      (<li key={item.name}>
        <Character 
          name={item.name} 
          image={item.image} 
          species={item.species}
        />
      </li>))}
  </ul>);

List.propTypes = {
  itemsArray: PropTypes.array.isRequired
}


export default List;