import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

//  STCOSTA
function FoodRecipeDetails(props) {
  const history = useHistory();
  const {
    getfoodList,
    foodDetailById,
  } = useContext(FoodContext);

  useEffect(() => {
    const { match: { params: { recipeid } } } = props;
    getfoodList('id', recipeid);
  }, []);

  return (
    <section>
      {foodDetailById.meals.length > 0
        && (
          <>
            <img
              data-testid="recipe-photo"
              alt="food"
            />
            <h2 data-testid="recipe-title">title</h2>
            <button
              src="shareIcon"
              data-testid="share-btn"
              type="button"
              id="shareIcon"
              onClick={ () => history.push('/drinks') }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <button
              src="whiteHeartIcon"
              data-testid="favorite-btn"
              type="button"
              id="favorite"
              onClick={ () => history.push('/drinks') }
            >
              <img src={ whiteHeartIcon } alt="white heart" />
            </button>
            <p data-testid="recipe-category">categoria</p>
            <p data-testid="instructions">instruções</p>
            <button
              data-testid="start-recipe-btn"
              type="button"
              id="startRecipe"
              onClick={ () => history.push('/drinks') }
            >
              Start
            </button>
          </>
        )}
    </section>
  );
}

FoodRecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodRecipeDetails;
