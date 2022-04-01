import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" searchBtn={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoods;
