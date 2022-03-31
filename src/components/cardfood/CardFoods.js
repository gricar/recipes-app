// Feito por Tabata;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodMainContext from '../../context/FoodMainContext';

const QTD_RECIPES = 12;

function CardFoods() {
  const { recipes, recipesByCategory } = useContext(FoodMainContext);

  const filteredRecipes = () => {
    if (recipesByCategory) {
      return recipesByCategory;
    }
    return recipes;
  };

  return (
    <section className="container-card">
      { filteredRecipes().slice(0, QTD_RECIPES).map(({
        idMeal,
        strMealThumb,
        strMeal,
      }, index) => (
        <Link
          key={ idMeal }
          style={ { textDecoration: 'none', color: 'black' } }
          to={ `/foods/${idMeal}` }
        >
          <div
            className="card"
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ strMealThumb }
              alt={ `receita de${strMeal}` }
              width="100"
              data-testid={ `${index}-card-img` }
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              { strMeal }
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CardFoods;
