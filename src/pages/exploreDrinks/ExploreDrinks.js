import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" searchBtn={ false } />
      <p>ExploreDrinks</p>
      <BottonMenu />
    </div>
  );
}

export default ExploreDrinks;
