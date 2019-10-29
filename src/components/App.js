import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List/List';
import characters from '../data';

const App = () => {
  console.log(characters);
  return (
    <>
      <Header />
      <List 
        itemsArray={characters}
      />
      <Footer />
    </>
  );
}

export default App;