import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
// Alissa e Gabriel

function Finish({ isAllChecked }) {
  const history = useHistory();
  return (
    <button
      className="finishRecipe"
      data-testid="finish-recipe-btn"
      type="button"
      disabled={ !isAllChecked }
      onClick={ () => history.push('/done-recipes') }
    >
      Finish Recipe
    </button>
  );
}

Finish.propTypes = {
  isAllChecked: PropTypes.bool.isRequired,
};

export default Finish;
