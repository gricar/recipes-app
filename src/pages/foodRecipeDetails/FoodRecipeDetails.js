import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import ListIngreAndMeasu from '../../components/pagesDetails/ListIngreAndMeasu';
import './FoodRecipeDetails.css';
import ButtonRemoveFavorite from '../../components/buttonRemoveFav/ButtonRemoveFavorite';
import ButtonAddFavorite from '../../components/buttonAddFav/ButtonAddFavorite';
import { getStorage } from '../../services/SetAndGetStorage';
import CardDrinksCarousel from '../../components/cardCarousel/CardDrinksCarousel';

//  STCOSTA
function FoodRecipeDetails(props) {
  const [favoriteStatus, setFavoriteStatus] = useState();
  const [showButtonRecipe, setShowButtonRecipe] = useState(false);
  const [msgButtonRecipe, setMsgButtonRecipe] = useState('Start Recipe');
  const [msgShare, setMsgShare] = useState('');
  const history = useHistory();

  const {
    getfoodList,
    foodDetailById,
    favoriteList,
  } = useContext(FoodContext);

  const { meals } = foodDetailById;
  const { match: { params: { recipeid } } } = props;
  const { match: { url } } = props;

  const checkFavorite = () => {
    const favoriteStorage = getStorage('favoriteRecipes');
    if (favoriteStorage) {
      const statusFavorite = (favoriteStorage.find((favoriteItem) => (
        recipeid === favoriteItem.id)));
      setFavoriteStatus(statusFavorite);
    }
  };

  const checkInProgress = () => {
    const inProgressList = getStorage('inProgressRecipes');
    if (inProgressList) {
      const isInProgress = Object.keys(inProgressList.meals)
        .find((productEl) => (productEl === recipeid));
      if (isInProgress) {
        setMsgButtonRecipe('Continue Recipe');
      }
    }
  };

  const checkDoneRecipe = () => {
    const doneRecipeList = getStorage('doneRecipes');
    if (doneRecipeList) {
      const isDoneRecipe = doneRecipeList
        .find((productEl) => (productEl.id === recipeid));
      if (isDoneRecipe) {
        setShowButtonRecipe(true);
      }
    }
  };

  const getVideoURL = ((urlVideo) => {
    const videoId = urlVideo.split('=');
    const embedURL = (`https://www.youtube.com/embed/${videoId[1]}`);
    return embedURL;
  });

  const share = (urlToShare) => {
    navigator.clipboard.writeText(`http://localhost:3000${urlToShare}`);
    setMsgShare('Link copied!');
  };

  useEffect(() => {
    getfoodList('id', recipeid);
    checkInProgress();
    checkDoneRecipe();
  }, []);

  useEffect(() => {
    checkFavorite();
  }, [favoriteList]);

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
              onClick={ () => share(url) }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <p>{ msgShare }</p>
            {
              favoriteStatus
                ? <ButtonRemoveFavorite productList={ meals[0] } typeItem="food" />
                : <ButtonAddFavorite productList={ meals[0] } typeItem="food" />
            }
            <p data-testid="recipe-category">{ meals[0].strCategory }</p>
            <ListIngreAndMeasu productList={ meals[0] } />
            <p data-testid="instructions">{ meals[0].strInstructions }</p>
            <iframe
              data-testid="video"
              src={ getVideoURL(meals[0].strYoutube) }
              title="YouTube video player"
              frameBorder="0"
            />
            <CardDrinksCarousel quant={ 6 } dataIdText="-recomendation-card" />
            <button
              data-testid="start-recipe-btn"
              type="button"
              hidden={ showButtonRecipe }
              className="startRecipe"
              onClick={ () => history.push(`/foods/${recipeid}/in-progress`) }
            >
              { msgButtonRecipe }
            </button>
          </>
        )}
    </section>
  );
}

FoodRecipeDetails.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodRecipeDetails;
