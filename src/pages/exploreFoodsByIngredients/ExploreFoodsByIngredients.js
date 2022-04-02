import React, { useEffect, useState } from 'react';
import BottonMenu from '../../components/BottonMenu';
import Header from '../../components/header/Header';
import { fetchIngredients, fetchImage } from '../../services/fetchFoodAndDrinkMain';

function ExploreFoodsByIngredients() {
  const [mealIngredients, setMealIngredients] = useState([]);
  const [mealImage, setMealImage] = useState([]);

  const getAllImages = async (ingredArr) => {
    const promises = ingredArr.map(async ({ strIngredient }) => { // https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
      const ingredientImg = await fetchImage('meal', strIngredient);
      setMealImage((prevState) => [...prevState, ingredientImg]);
    });

    await Promise.all(promises);
  };

  useEffect(() => {
    const getIngredients = async () => {
      const TWELVE_INGREDIENTS = 12;
      const { meals } = await fetchIngredients('meal');
      const ingredArr = meals.slice(0, TWELVE_INGREDIENTS);
      setMealIngredients(ingredArr);
      getAllImages(ingredArr);
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
              const smallImg = mealImage[index];
              return (
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <img
                    src={ smallImg }
                    alt="ingredientImg"
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
