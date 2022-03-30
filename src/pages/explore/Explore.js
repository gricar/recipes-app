import React from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function Explore() {
  return (
    <div>
      <Header title="Explore" searchBtn={ false } />
      <p>Explore</p>
      <BottonMenu />
    </div>
  );
}

export default Explore;
