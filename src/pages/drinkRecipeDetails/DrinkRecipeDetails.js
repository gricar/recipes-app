import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import DrinksContext from '../../context/DrinksContext';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import ListIngreAndMeasu from '../../components/pagesDetails/ListIngreAndMeasu';
import './DrinkRecipeDetails.css';
import ButtonAddFavorite from '../../components/buttonAddFav/ButtonAddFavorite';
import ButtonRemoveFavorite from '../../components/buttonRemoveFav/ButtonRemoveFavorite';
import { getStorage } from '../../services/SetAndGetStorage';
import CardFoodsCarousel from '../../components/cardCarousel/CardFoodsCarousel';

//  feito por Suéli
function DrinkRecipeDetails(props) {
  const history = useHistory();
  const {
    getDrinksList,
    drinksDetailById,
  } = useContext(DrinksContext);

  const {
    favoriteList,
  } = useContext(FoodContext);

  const [favoriteStatus, setFavoriteStatus] = useState();
  const [msgButtonRecipe, setMsgButtonRecipe] = useState('Start Recipe');
  const [showButtonRecipe, setShowButtonRecipe] = useState(false);
  const [msgShare, setMsgShare] = useState('');
  const { drinks } = drinksDetailById;
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
      const isInProgress = Object.keys(inProgressList.cocktails)
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

  useEffect(() => {
    getDrinksList('id', recipeid);
    checkInProgress();
    checkDoneRecipe();
  }, []);

  useEffect(() => {
    checkFavorite();
  }, [favoriteList]);

  const share = (urlToShare) => {
    navigator.clipboard.writeText(`http://localhost:3000${urlToShare}`);
    setMsgShare('Link copied!');
  };

  return (
    <section>
      {drinksDetailById.drinks.length > 0
        && (
          <>
            <img
              src={ drinks[0].strDrinkThumb }
              data-testid="recipe-photo"
              alt="drink"
            />
            <h2 data-testid="recipe-title">{ drinks[0].strDrink }</h2>
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
                ? <ButtonRemoveFavorite productList={ drinks[0] } typeItem="drink" />
                : <ButtonAddFavorite productList={ drinks[0] } typeItem="drink" />
            }
            <p data-testid="recipe-category">{ drinks[0].strAlcoholic }</p>
            <ListIngreAndMeasu productList={ drinks[0] } />
            <p data-testid="instructions">{ drinks[0].strInstructions }</p>
            <CardFoodsCarousel quant={ 6 } dataIdText="-recomendation-card" />
            <button
              data-testid="start-recipe-btn"
              type="button"
              hidden={ showButtonRecipe }
              className="startRecipe"
              onClick={ () => history.push(`/drinks/${recipeid}/in-progress`) }
            >
              { msgButtonRecipe }
            </button>
          </>
        )}
    </section>
  );
}

DrinkRecipeDetails.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DrinkRecipeDetails;
