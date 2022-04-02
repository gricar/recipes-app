import React, { useEffect, useState } from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import { fetchIngredients } from '../../services/fetchFoodAndDrinkMain';

function ExploreDrinksByIngredients() {
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

  return (
    <div>
      <Header title="Explore Ingredients" searchBtn={ false } />
      <div>
        {
          drinksIngredients && (
            drinksIngredients.map((ingredient, index) => {
              const { strIngredient1 } = ingredient;
              return (
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <img
                    src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                    alt={ `${strIngredient1} img` }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
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

export default ExploreDrinksByIngredients;
