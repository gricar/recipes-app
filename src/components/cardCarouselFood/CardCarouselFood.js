import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/FoodContext';

function CardFoodsCarrousel({ quant, dataIdText }) {
  const QTD_RECIPES = quant;
  const { recipes, recipesByCategory } = useContext(FoodContext);

  const filteredRecipes = () => {
    if (recipesByCategory) {
      return recipesByCategory;
    }
    return recipes;
  };

  return (
    <section>
      { filteredRecipes().slice(0, QTD_RECIPES).map(({
        idMeal,
        strMealThumb,
        strMeal,
      }, index) => (
        <Link
          key={ idMeal }
          // style={ { textDecoration: 'none', color: 'black' } }
          to={ `/foods/${idMeal}` }
        >
          <div
            className="card"
            data-testid={ `${index}${dataIdText}` }
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

CardFoodsCarrousel.propTypes = {
  quant: PropTypes.number.isRequired,
  dataIdText: PropTypes.string.isRequired,
};

export default CardFoodsCarrousel;
