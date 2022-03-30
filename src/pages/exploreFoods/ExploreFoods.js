import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" searchBtn={ false } />
      <p>ExploreFoods</p>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoods;
