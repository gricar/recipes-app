import React from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';

function ExploreFoods() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explore Foods" searchBtn={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
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
