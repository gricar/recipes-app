import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import DrinksContext from '../../context/DrinksContext';
import FoodContext from '../../context/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import CardFoods from '../../components/cardfood/CardFoods';
import ListIngreAndMeasu from '../../components/pagesDetails/ListIngreAndMeasu';
import './DrinkRecipeDetails.css';
import ButtonAddFavorite from '../../components/buttonAddFav/ButtonAddFavorite';
import ButtonRemoveFavorite from '../../components/buttonRemoveFav/ButtonRemoveFavorite';
import { getStorage } from '../../services/SetAndGetStorage';

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
  const { drinks } = drinksDetailById;
  const { match: { params: { recipeid } } } = props;

  const checkFavorite = () => {
    const favoriteStorage = getStorage('favoriteRecipes');
    if (favoriteStorage) {
      const statusFavorite = (favoriteStorage.find((favoriteItem) => (
        recipeid === favoriteItem.id)));
      console.log(statusFavorite);
      setFavoriteStatus(statusFavorite);
    }
  };

  useEffect(() => {
    getDrinksList('id', recipeid);
  }, []);

  useEffect(() => {
    checkFavorite();
  }, [favoriteList]);

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
              onClick={ () => history.push('/drinks') }
            >
              <img src={ shareIcon } alt="share" />
            </button>
            {
              favoriteStatus
                ? <ButtonRemoveFavorite productList={ drinks[0] } typeItem="drink" />
                : <ButtonAddFavorite productList={ drinks[0] } typeItem="drink" />
            }
            <p data-testid="recipe-category">{ drinks[0].strAlcoholic }</p>
            <ListIngreAndMeasu productList={ drinks[0] } />
            <p data-testid="instructions">{ drinks[0].strInstructions }</p>
            <CardFoods quant={ 6 } dataIdText="-recomendation-card" />
            <button
              data-testid="start-recipe-btn"
              type="button"
              className="startRecipe"
              onClick={ () => history.push(`/drinks/${recipeid}/in-progress`) }
            >
              Start Recipe
            </button>
          </>
        )}
    </section>
  );
}

DrinkRecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DrinkRecipeDetails;
