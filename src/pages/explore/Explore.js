import React from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import './explore.css';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explore" searchBtn={ false } />
      <div className="exploreButtons">
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <BottonMenu />
    </div>
  );
}

export default Explore;
