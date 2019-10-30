import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image, name, species }) => (
  <div className={styles.Character}>
    <img src={image} />
    <h1>{name}</h1>
    <div className={styles.species}>
      <p id={styles.left}>Species</p>
      <p id={styles.right}>{species}</p>
    </div>
  </div>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
}

export default Character;