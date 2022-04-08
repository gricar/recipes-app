/* Alissa */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import ButtonAddFavorite from '../../components/buttonAddFav/ButtonAddFavorite';
import ButtonRemoveFavorite from '../../components/buttonRemoveFav/ButtonRemoveFavorite';
import Finish from '../../components/recipeInProgress/Finish';
import Ingredients from '../../components/recipeInProgress/Ingredients';
import Instructions from '../../components/recipeInProgress/Instructions';
import Subtitle from '../../components/recipeInProgress/Subtitle';
import Thumbnail from '../../components/recipeInProgress/Thumbnail';
import Title from '../../components/recipeInProgress/Title';
import { getStorage } from '../../services/SetAndGetStorage';
import shareIcon from '../../images/shareIcon.svg';
import DrinksContext from '../../context/DrinksContext';
import FoodContext from '../../context/FoodContext';

function DrinkRecipeInProgress(props) {
  const { match: { params: { recipeid } } } = props; // resultado: /foods/:recipeid/in-progress ; quando é bebida em progresso substitui por drinks.
  const [ingredientsMeasures, setIngredientsMeasures] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState(); // Copiado da Su
  const [msgShare, setMsgShare] = useState(''); // Copiado da Su
  const [recipeInProgress, setRecipeInProgress] = useState(); // É para poder utilizar os dados daquele prato dentro de FoodRecipeInProgress.
  const [isAllChecked, setIsAllChecked] = useState(); // Alissa e Gabriel

  const {
    getDrinksList,
    drinksDetailById,
  } = useContext(DrinksContext);

  const {
    favoriteList,
  } = useContext(FoodContext);

  useEffect(() => {
    getDrinksList('id', recipeid);
  }, []);

  const { drinks } = drinksDetailById;

  useEffect(() => {
    setRecipeInProgress(drinks
      .find((drink) => drink.idDrink === recipeid));
  }, [drinksDetailById]);

  useEffect(() => {
    if (recipeInProgress !== undefined) {
      const readyIngredients = [];
      const ingredients = Object.entries(recipeInProgress)
        .filter((entry) => entry[0].includes('strIngredient'))
        .filter((entry) => entry[1] !== ' ')
        .filter((entry) => entry[1] !== null)
        .filter((entry) => entry[1] !== '');
      const measures = Object.entries(recipeInProgress)
        .filter((entry) => entry[0].includes('strMeasure'))
        .filter((entry) => entry[1] !== ' ')
        .filter((entry) => entry[1] !== null)
        .filter((entry) => entry[1] !== '');

      ingredients.forEach((ingred, i) => {
        readyIngredients[i] = `${ingred[1]} ${measures[i][1]}`;
      });

      setIngredientsMeasures(readyIngredients);
    }
  }, [recipeInProgress]);

  const checkFavorite = () => { // Copiado da Su
    const favoriteStorage = getStorage('favoriteRecipes');
    if (favoriteStorage) {
      const statusFavorite = (favoriteStorage.find((favoriteItem) => (
        recipeid === favoriteItem.id)));
      setFavoriteStatus(statusFavorite);
    }
  };

  useEffect(() => { // Copiado da Su
    checkFavorite();
  }, [favoriteList]);

  const share = () => {
    navigator.clipboard.writeText(`http://localhost:3000/drinks/${recipeid}`);
    setMsgShare('Link copied!');
  };

  // Os ingredientes são processados dentro do componente.
  return (recipeInProgress !== undefined
    && (
      <main>
        <Thumbnail
          thumb={ recipeInProgress.strDrinkThumb }
          title={ recipeInProgress.strDrink }
        />
        <Title title={ recipeInProgress.strDrink } />
        <Subtitle subtitle={ recipeInProgress.strAlcoholic } />
        <button
          src="shareIcon"
          data-testid="share-btn"
          type="button"
          id="shareIcon"
          onClick={ () => share() }
        >
          <img src={ shareIcon } alt="share" />
        </button>
        <p>{ msgShare }</p>
        { // Copiado da Su
          favoriteStatus
            ? <ButtonRemoveFavorite productList={ drinks[0] } typeItem="drink" />
            : <ButtonAddFavorite productList={ drinks[0] } typeItem="drink" />
        }
        <Ingredients
          ingredientsMeasures={ ingredientsMeasures }
          setIsAllChecked={ setIsAllChecked }
        />
        <Instructions instructions={ recipeInProgress.strInstructions } />
        <Finish isAllChecked={ isAllChecked } />

      </main>)
  );
}

DrinkRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DrinkRecipeInProgress;
