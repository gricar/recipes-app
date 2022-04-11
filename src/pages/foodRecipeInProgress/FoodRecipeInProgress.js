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
import shareIconBlue from '../../images/shareIconBlue.svg';
import FoodContext from '../../context/FoodContext';
import './FoodRecipeInProgress.css';

function FoodRecipeInProgress(props) {
  const { match: { params: { recipeid } } } = props; // resultado: /foods/:recipeid/in-progress ; quando é bebida em progresso substitui por drinks.
  const [ingredientsMeasures, setIngredientsMeasures] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState(); // Copiado da Su
  const [msgShare, setMsgShare] = useState(''); // Copiado da Su
  const [recipeInProgress, setRecipeInProgress] = useState(); // É para poder utilizar os dados daquele prato dentro de FoodRecipeInProgress.
  const [isAllChecked, setIsAllChecked] = useState(); // Alissa e Gabriel

  const {
    getfoodList,
    foodDetailById,
    favoriteList,
  } = useContext(FoodContext);

  useEffect(() => { // Igual ao FoodRecipeDetails, pego o id baseado no que a pessoa clicou/path.
    getfoodList('id', recipeid);
  }, []);

  const { meals } = foodDetailById;

  useEffect(() => {
    setRecipeInProgress(meals.find((meal) => meal.idMeal === recipeid));
  }, [foodDetailById]);

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
    navigator.clipboard.writeText(`http://localhost:3000/foods/${recipeid}`);
    setMsgShare('Link copied!');
  };

  // Os ingredientes são processados dentro do componente.
  return (recipeInProgress !== undefined
    && (
      <main className="food-details">
        <Thumbnail
          thumb={ recipeInProgress.strMealThumb }
          title={ recipeInProgress.strMeal }
        />
        <div className="buttons-share-fav">
          <p className="msg-share">{ msgShare }</p>
          <button
            src="shareIcon"
            data-testid="share-btn"
            type="button"
            id="shareIcon"
            onClick={ () => share() }
          >
            <img src={ shareIconBlue } alt="share" />
          </button>
          { // Copiado da Su
            favoriteStatus
              ? <ButtonRemoveFavorite productList={ meals[0] } typeItem="food" />
              : <ButtonAddFavorite productList={ meals[0] } typeItem="food" />
          }
        </div>
        <Title title={ recipeInProgress.strMeal } />
        <Subtitle subtitle={ recipeInProgress.strCategory } />
        <Ingredients
          ingredientsMeasures={ ingredientsMeasures }
          setIsAllChecked={ setIsAllChecked }
        />
        <Instructions instructions={ recipeInProgress.strInstructions } />
        <Finish isAllChecked={ isAllChecked } />
      </main>)
  );
}

FoodRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodRecipeInProgress;
