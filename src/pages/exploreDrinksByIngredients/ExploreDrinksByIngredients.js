import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreDrinksByIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <p>ExploreDrinksByIngredients</p>
      <BottonMenu />
    </div>
  );
}

export default ExploreDrinksByIngredients;
