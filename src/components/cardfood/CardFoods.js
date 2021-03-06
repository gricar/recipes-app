// Feito por Tabata;
// Suéli - alteração quant e dataIdText dinâmico.
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

function CardFoods({ quant, dataIdText }) {
  const QTD_RECIPES = quant;
  const { recipes, recipesByCategory } = useContext(FoodContext);

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
          className="link-card"
          key={ idMeal }
          to={ `/foods/${idMeal}` }
        >
          <div
            className="card"
            data-testid={ `${index}${dataIdText}` }
          >
            <img
              src={ strMealThumb }
              alt={ `receita de${strMeal}` }
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

CardFoods.propTypes = {
  quant: PropTypes.number.isRequired,
  dataIdText: PropTypes.string.isRequired,
};

export default CardFoods;
