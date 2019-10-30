import React from 'react';
import Character from '../Character/Character';
import PropTypes from 'prop-types';
import styles from './List.css';

const List = ({ itemsArray, Component }) => (
  <ul className={styles.List}>
    {itemsArray.map(item => 
      (<li key={item.name}>
        <Component {...item}/>
      </li>))}
  </ul>);

List.propTypes = {
  itemsArray: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired
}


export default List;