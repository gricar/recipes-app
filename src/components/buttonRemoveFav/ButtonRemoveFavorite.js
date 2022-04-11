import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { getStorage, setStorage } from '../../services/SetAndGetStorage';
// import favoriteHeart from '../../images/favoriteHeart.svg';
import removeFavoriteIcon from '../../images/removeFavoriteIcon.svg';
import FoodContext from '../../context/FoodContext';

function ButtonRemoveFavorite({ productList, typeItem }) {
  const {
    setFavoriteList,
  } = useContext(FoodContext);

  const removeFavorite = (() => {
    console.log('remove');
    const favoriteStorage = getStorage('favoriteRecipes');
    let newFavorite = {};
    if (typeItem === 'food') {
      const {
        idMeal,
      } = productList;
      newFavorite = favoriteStorage.filter((favoriteItem) => (
        favoriteItem.id !== idMeal));
    } else {
      const {
        idDrink,
      } = productList;
      newFavorite = favoriteStorage.filter((favoriteItem) => (
        favoriteItem.id !== idDrink));
    }
    setStorage('favoriteRecipes', newFavorite);
    setFavoriteList(newFavorite);
  });

  return (
    <button
      src="blackHeartIcon"
      data-testid="favorite-btn"
      type="button"
      id="favorite"
      onClick={ removeFavorite }
    >
      <img src={ removeFavoriteIcon } alt="blackHeartIcon" />
    </button>
  );
}

ButtonRemoveFavorite.propTypes = {
  productList: PropTypes.objectOf(PropTypes.object).isRequired,
  typeItem: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ButtonRemoveFavorite;
