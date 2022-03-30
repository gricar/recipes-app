import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreDrinks() {
  return (
    <div>
      <p>ExploreDrinks</p>
      <Header title="Explore Drinks" searchBtn={ false } />
      <BottonMenu />
    </div>
  );
}

export default ExploreDrinks;
