import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import FoodContext from '../../context/FoodContext';
import {
  fetchIngredients, fetchByIngredient,
} from '../../services/fetchFoodAndDrinkMain';
import './exploreFoodsByIngredients.css';

function ExploreFoodsByIngredients() {
  const { setRecipesByCategory } = useContext(FoodContext);

  const [mealIngredients, setMealIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const TWELVE_INGREDIENTS = 12;
      const { meals } = await fetchIngredients('meal');
      const ingredArr = meals.slice(0, TWELVE_INGREDIENTS);
      setMealIngredients(ingredArr);
    };
    getIngredients();
  }, []);

  const history = useHistory();

  const sendToMainPage = async (strIngredient) => {
    const filteredCategory = await fetchByIngredient('meal', strIngredient);
    setRecipesByCategory(filteredCategory.meals);
    history.push('/foods');
  };

  return (
    <div className="container-explore-ingredients">
      <Header title="Explore Ingredients" searchBtn={ false } />
      <div className="exploreByIngredients">
        {
          mealIngredients && (
            mealIngredients.map(({ strIngredient }, index) => (
              <button
                type="button"
                className="exploreByIngredientsButton"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => sendToMainPage(strIngredient) }
              >
                <img
                  src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                  alt={ `${strIngredient} img` }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
              </button>
            ))
          )
        }
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoodsByIngredients;
