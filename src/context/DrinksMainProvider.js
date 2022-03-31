// Feito por Tabata;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DrinksMainContext from './DrinksMainContext';
import {
  fetchDrinkMain,
  fetchDrinkCategories,
  fetchDrinksAccordingCategory,
} from '../services/fetchFoodAndDrinkMain';

function FoodMainProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [drinksByCategory, setDrinksByCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const api = await fetchDrinkMain();
      setDrinks(api.drinks);
      const apiCategories = await fetchDrinkCategories();
      setCategories(apiCategories.drinks);
      const filteredCategory = await fetchDrinksAccordingCategory(filterCategory);
      setDrinksByCategory(filteredCategory.drinks);
    })();
  }, [filterCategory]);

  const context = {
    drinks,
    drinksByCategory,
    categories,
    filterCategory,
    setFilterCategory,
  };

  return (
    <DrinksMainContext.Provider value={ context }>
      { children }
    </DrinksMainContext.Provider>
  );
}

FoodMainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodMainProvider;
