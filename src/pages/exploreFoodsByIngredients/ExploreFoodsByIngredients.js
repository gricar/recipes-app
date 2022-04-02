import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import FoodContext from '../../context/FoodContext';
import {
  fetchIngredients, fetchFoodsAccordingCategory,
} from '../../services/fetchFoodAndDrinkMain';

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
    const filteredCategory = await fetchFoodsAccordingCategory(strIngredient);
    setRecipesByCategory(filteredCategory.meals);
    history.push('/foods');
  };

  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <div>
        {
          mealIngredients && (
            mealIngredients.map((ingredient, index) => {
              const { strIngredient } = ingredient;
              return (
                <button
                  type="button"
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
              );
            })
          )
        }
      </div>
      <BottonMenu />
    </div>
  );
}

export default ExploreFoodsByIngredients;
