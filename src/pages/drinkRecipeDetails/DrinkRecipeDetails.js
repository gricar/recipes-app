import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import DrinksContext from '../../context/DrinksContext';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import CardFoods from '../../components/cardfood/CardFoods';
import ListIngreAndMeasu from '../../components/pagesDetails/ListIngreAndMeasu';
import './DrinkRecipeDetails.css';

function DrinkRecipeDetails(props) {
  const history = useHistory();
  const {
    getDrinksList,
    drinksDetailById,
  } = useContext(DrinksContext);
  const { drinks } = drinksDetailById;
  const { match: { params: { recipeid } } } = props;

  useEffect(() => {
    getDrinksList('id', recipeid);
  }, []);

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
            <button
              src="whiteHeartIcon"
              data-testid="favorite-btn"
              type="button"
              id="favorite"
              onClick={ () => history.push('/drinks') }
            >
              <img src={ whiteHeartIcon } alt="white heart" />
            </button>
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
