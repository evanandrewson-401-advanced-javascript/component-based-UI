import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import List from './List/List';
import characters from '../data';
import Character from './Character/Character'

const App = () => {
  console.log(characters);
  return (
    <>
      <Header />
      <List 
        itemsArray={characters}
        Component={Character}
      />
      <Footer />
    </>
  );
}

export default App;