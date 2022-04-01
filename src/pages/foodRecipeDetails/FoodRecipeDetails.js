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
  const { meals } = foodDetailById;

  useEffect(() => {
    const { match: { params: { recipeid } } } = props;
    getfoodList('id', recipeid);
  }, []);

  const getIngredienteAndMeasure = (() => {
    const detailsArray = Object.entries(meals[0]);
    const ingredientsArray = detailsArray
      .filter((detailsEl) => (
        (detailsEl[0].includes('strIngredient'))
        && (detailsEl[1] !== '')
      ));
    const measureArray = detailsArray
      .filter((detailsEl) => (
        (detailsEl[0].includes('strMeasure'))
        && (detailsEl[1] !== ' ')
      ));
    const IngrAndMeasureArray = ingredientsArray
      .map((ingredientElem, index) => (
        (`${ingredientElem[1]} - ${measureArray[index][1]}`)
      ));
    return IngrAndMeasureArray;
  });

  const getVideoURL = ((urlVideo) => {
    const videoId = urlVideo.split('=');
    const embedURL = (`https://www.youtube.com/embed/${videoId[1]}`);
    return embedURL;
  });

  return (
    <section>
      {foodDetailById.meals.length > 0
        && (
          <>
            <img
              src={ meals[0].strMealThumb }
              data-testid="recipe-photo"
              alt="food"
            />
            <h2 data-testid="recipe-title">{ meals[0].strMeal }</h2>
            <button
              src="shareIcon"
              data-testid="share-btn"
              type="button"
              id="shareIcon"
              onClick={ () => history.push('/foods') }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <button
              src="whiteHeartIcon"
              data-testid="favorite-btn"
              type="button"
              id="favorite"
              onClick={ () => history.push('/foods') }
            >
              <img src={ whiteHeartIcon } alt="white heart" />
            </button>
            <p data-testid="recipe-category">{ meals[0].strCategory }</p>
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
            <p data-testid="instructions">{ meals[0].strInstructions }</p>
            <iframe
              data-testid="video"
              src={ getVideoURL(meals[0].strYoutube) }
              title="YouTube video player"
              frameBorder="0"
            />
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
