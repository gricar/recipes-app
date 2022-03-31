import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import FoodContext from './FoodContext';
import fetchFood from '../services/fetchFood';
import {
  fetchFoodMain, fetchFoodCategories, fetchFoodsAccordingCategory,
} from '../services/fetchFoodAndDrinkMain';

// STCOSTA
function FoodProvider({ children }) {
  const [foodListByIngre, setFoodListByIngre] = useState({ meals: [] });
  const [foodListByName, setFoodListByName] = useState({ meals: [] });
  const [foodListByFirstLetter, setFoodListByFirstLetter] = useState({ meals: [] });
  const [foodListError, setFoodListError] = useState({ meals: [] });
  // tabata
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [recipesByCategory, setRecipesByCategory] = useState([]);

  const getfoodList = (searchType, searchFood) => {
    fetchFood(searchType, searchFood)
      .then((response) => {
        if (searchType === 'Ingredient') {
          setFoodListByIngre(response);
        } else if (searchType === 'Name') {
          setFoodListByName(response);
        } else if (searchType === 'First-letter') {
          setFoodListByFirstLetter(response);
        }
      })
      .catch((error) => {
        setFoodListError({ meals: error });
      });
  };

  // tabata
  useEffect(() => {
    (async () => {
      const { meals } = await fetchFoodMain();
      setRecipes(meals);
      const categoriesAPI = await fetchFoodCategories();
      setCategories(categoriesAPI.meals);
      const filteredCategory = await fetchFoodsAccordingCategory(filterCategory);
      setRecipesByCategory(filteredCategory.meals);
    })();
  }, [filterCategory]);

  const context = {
    foodListByIngre,
    setFoodListByIngre,
    foodListByName,
    setFoodListByName,
    foodListByFirstLetter,
    setFoodListByFirstLetter,
    getfoodList,
    foodListError,
    recipes,
    recipesByCategory,
    categories,
    filterCategory,
    setFilterCategory,
    setRecipesByCategory,
  };

  return (
    <FoodContext.Provider
      value={ context }
    >
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
