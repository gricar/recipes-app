import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { getStorage, setStorage } from '../../services/SetAndGetStorage';
import addFavoriteIcon from '../../images/addFavoriteIcon.svg';
import FoodContext from '../../context/FoodContext';

function ButtonAddFavorite({ productList, typeItem }) {
  const {
    setFavoriteList,
  } = useContext(FoodContext);
  const addFavorite = () => {
    let newFavorite = {};
    let favoriteStorage = getStorage('favoriteRecipes');
    if (typeItem === 'food') {
      const {
        idMeal,
        strArea,
        strCategory,
        strMeal,
        strMealThumb,
      } = productList;
      newFavorite = {
        id: idMeal,
        type: 'food',
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
    } else if (typeItem === 'drink') {
      console.log('bebida');
      const {
        idDrink,
        strCategory,
        strAlcoholic,
        strDrink,
        strDrinkThumb,
      } = productList;
      newFavorite = {
        id: idDrink,
        type: 'drink',
        nationality: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
    }
    if (favoriteStorage) {
      favoriteStorage.push(newFavorite);
    } else {
      favoriteStorage = [newFavorite];
    }
    setStorage('favoriteRecipes', favoriteStorage);
    setFavoriteList(favoriteStorage);
  };

  return (
    <button
      src="whiteHeartIcon"
      data-testid="favorite-btn"
      type="button"
      id="favorite"
      onClick={ addFavorite }
    >
      <img src={ addFavoriteIcon } alt="white heart" />
    </button>
  );
}

ButtonAddFavorite.propTypes = {
  productList: PropTypes.objectOf(PropTypes.object).isRequired,
  typeItem: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ButtonAddFavorite;
