import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import CardDrinks from '../../components/carddrinks/CardDrinks';
import ListIngreAndMeasu from '../../components/pagesDetails/ListIngreAndMeasu';
import './FoodRecipeDetails.css';

//  STCOSTA
function FoodRecipeDetails(props) {
  const history = useHistory();
  const {
    getfoodList,
    foodDetailById,
  } = useContext(FoodContext);
  const { meals } = foodDetailById;
  const { match: { params: { recipeid } } } = props;

  useEffect(() => {
    getfoodList('id', recipeid);
  }, []);

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
            <ListIngreAndMeasu productList={ meals[0] } />
            <p data-testid="instructions">{ meals[0].strInstructions }</p>
            <iframe
              data-testid="video"
              src={ getVideoURL(meals[0].strYoutube) }
              title="YouTube video player"
              frameBorder="0"
            />
            <CardDrinks quant={ 6 } dataIdText="-recomendation-card" />
            <button
              data-testid="start-recipe-btn"
              type="button"
              className="startRecipe"
              onClick={ () => history.push(`/foods/${recipeid}/in-progress`) }
            >
              Start Recipe
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
