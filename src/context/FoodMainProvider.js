// Feito por Tabata;
// Tudo movido para FoodProvider (Unico estado global);
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodMainContext from './FoodMainContext';
import {
  fetchFoodMain,
  fetchFoodCategories,
  fetchFoodsAccordingCategory,
} from '../services/fetchFoodAndDrinkMain';

function FoodMainProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [recipesByCategory, setRecipesByCategory] = useState([]);

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
    recipes,
    recipesByCategory,
    categories,
    filterCategory,
    setFilterCategory,
  };

  return (
    <FoodMainContext.Provider value={ context }>
      { children }
    </FoodMainContext.Provider>
  );
}

FoodMainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodMainProvider;
