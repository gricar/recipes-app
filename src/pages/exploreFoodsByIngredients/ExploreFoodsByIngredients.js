import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreFoodsByIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <p>ExploreFoodsByIngredients</p>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoodsByIngredients;
