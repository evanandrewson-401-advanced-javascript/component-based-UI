import React from 'react';
import PropTypes from 'prop-types';

const Character = (image, name, species) => (
  <>
    <img src={image} />
    <h1>{name}</h1>
    <p>{species}</p>
  </>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
}

export default Character;