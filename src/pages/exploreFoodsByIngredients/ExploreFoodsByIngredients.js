import React, { useEffect, useState } from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import { fetchIngredients } from '../../services/fetchFoodAndDrinkMain';

function ExploreFoodsByIngredients() {
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

  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <div>
        {
          mealIngredients && (
            mealIngredients.map((ingredient, index) => {
              const { strIngredient } = ingredient;
              return (
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <img
                    src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                    alt={ `${strIngredient} img` }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
                </div>
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
