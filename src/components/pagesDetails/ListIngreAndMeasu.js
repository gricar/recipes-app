import PropTypes from 'prop-types';
import React from 'react';

function ListIngreAndMeasu({ productList }) {
  const getIngredienteAndMeasure = (() => {
    const detailsArray = Object.entries(productList);
    const ingredientsArray = detailsArray
      .filter((detailsEl) => (
        (detailsEl[0].includes('strIngredient'))
        && (detailsEl[1])
      ));
    const measureArray = detailsArray
      .filter((detailsEl) => (
        (detailsEl[0].includes('strMeasure'))
        && (detailsEl[1])
      ));
    const IngrAndMeasureArray = ingredientsArray
      .map((ingredientElem, index) => (
        (`${ingredientElem[1]} - ${measureArray[index][1]}`)
      ));
    return IngrAndMeasureArray;
  });

  return (
    <ul>
      {
        getIngredienteAndMeasure()
          .map((IngrMeasureElem, index) => (
            <li
              key={ IngrMeasureElem }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { IngrMeasureElem }
            </li>
          ))
      }
    </ul>
  );
}

ListIngreAndMeasu.propTypes = {
  productList: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ListIngreAndMeasu;
