import React from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import fetchDrinks from '../../services/fetchDrinks';
import './exploreDrinks.css';

function ExploreDrinks() {
  const history = useHistory();

  const handleSurprise = async () => {
    const { drinks } = await fetchDrinks('random', '.php');
    history.push(`/drinks/${drinks[0].idDrink}`);
  };

  return (
    <div>
      <Header title="Explore Drinks" searchBtn={ false } />
      <div className="exploreDrinks">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ handleSurprise }
        >
          Surprise me!
        </button>
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreDrinks;
