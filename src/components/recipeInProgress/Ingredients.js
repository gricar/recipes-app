import PropTypes from 'prop-types';
import React from 'react';

function Ingredients({ ingredientsMeasures }) {
  /* A ul e os lis são apenas para estruturar/deixar organizado. No CSS deve retirar as bolinhas. */
  return (
    <section>
      <ul>
        { ingredientsMeasures.map((ingredient, index) => (
          <li key={ index }>
            <label
              htmlFor={ `ingredient-${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ `ingredient-${index}` }
              />
              { ingredient }
            </label>
          </li>
        ))}
      </ul>
      { }
    </section>
  );
}

Ingredients.propTypes = {
  ingredientsMeasures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
