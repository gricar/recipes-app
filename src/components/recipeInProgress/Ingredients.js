import PropTypes from 'prop-types';
import React from 'react';
import './IngredientsInRecipeInProgress.css';

function Ingredients({ ingredientsMeasures, setIsAllChecked }) {
  /* A ul e os lis são apenas para estruturar/deixar organizado. No CSS deve retirar as bolinhas. No CSS risca os ingredientes marcados. */

  // Alissa e Gabriel
  const listAllCheckbox = () => {
    const ingredientsElementsCollection = document
      .getElementsByClassName('ingredient-input');
    const ingredientsElementsArray = Array.from(ingredientsElementsCollection);
    const isAllTrue = ingredientsElementsArray.every(({ checked }) => checked);

    setIsAllChecked(isAllTrue);
  };

  return (
    <section>
      <ul className="ingredients-list">
        { ingredientsMeasures.map((ingredient, index) => (
          <li key={ index }>
            <label
              className="ingredient-container"
              htmlFor={ `ingredient-${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                className="ingredient-input"
                type="checkbox"
                id={ `ingredient-${index}` }
                onChange={ listAllCheckbox }
              />
              <span className="checkmark">{ ingredient }</span>
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
  setIsAllChecked: PropTypes.func.isRequired,
};

export default Ingredients;
