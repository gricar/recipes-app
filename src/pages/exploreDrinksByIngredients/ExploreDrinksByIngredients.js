import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import DrinksContext from '../../context/DrinksContext';
import {
  fetchIngredients, fetchByIngredient,
} from '../../services/fetchFoodAndDrinkMain';
import '../exploreFoodsByIngredients/exploreFoodsByIngredients.css';

function ExploreDrinksByIngredients() {
  const { setDrinksByCategory } = useContext(DrinksContext);

  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const TWELVE_INGREDIENTS = 12;
      const { drinks } = await fetchIngredients('cocktail');
      const ingredArr = drinks.slice(0, TWELVE_INGREDIENTS);
      setDrinksIngredients(ingredArr);
    };
    getIngredients();
  }, []);

  const history = useHistory();

  const sendToMainPage = async (strIngredient) => {
    const filteredCategory = await fetchByIngredient('cocktail', strIngredient);
    setDrinksByCategory(filteredCategory.drinks);
    history.push('/drinks');
  };

  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <div className="exploreByIngredients">
        {
          drinksIngredients && (
            drinksIngredients.map(({ strIngredient1 }, index) => (
              <button
                type="button"
                className="exploreByIngredientsButton"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => sendToMainPage(strIngredient1) }
              >
                <img
                  src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                  alt={ `${strIngredient1} img` }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
              </button>
            ))
          )
        }
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreDrinksByIngredients;
