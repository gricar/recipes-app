import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function Explore() {
  return (
    <div>
      <Header title="Explore" searchBtn={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </div>
      <BottonMenu />
    </div>
  );
}

export default Explore;
