import React from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import fetchFood from '../../services/fetchFood';
import './exploreFoods.css';

function ExploreFoods() {
  const history = useHistory();

  const handleSurprise = async () => {
    const { meals } = await fetchFood('random', '.php');
    history.push(`/foods/${meals[0].idMeal}`);
  };

  return (
    <div>
      <Header title="Explore Foods" searchBtn={ false } />
      <div className="exploreFoods">
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
          onClick={ handleSurprise }
        >
          Surprise me!
        </button>
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoods;
