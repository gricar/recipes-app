import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DrinksContext from './DrinksContext';
import fetchDrinks from '../services/fetchDrinks';
import {
  fetchDrinkMain, fetchDrinkCategories, fetchDrinksAccordingCategory,
} from '../services/fetchFoodAndDrinkMain';

// STCOSTA
function DrinksProvider({ children }) {
  const [drinksListByIngre, setDrinksListByIngre] = useState({ drinks: [] });
  const [drinksListByName, setDrinksListByName] = useState({ drinks: [] });
  const [drinksListByFirstLetter, setDrinksListByFirstLetter] = useState({ drinks: [] });
  const [drinksListError, setDrinksListError] = useState({ drinks: [] });
  // tabata
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [drinksByCategory, setDrinksByCategory] = useState([]);

  const getDrinksList = (searchType, searchDrink) => {
    fetchDrinks(searchType, searchDrink)
      .then((response) => {
        if (searchType === 'Ingredient') {
          setDrinksListByIngre(response);
        } else if (searchType === 'Name') {
          setDrinksListByName(response);
        } else if (searchType === 'First-letter') {
          setDrinksListByFirstLetter(response);
        }
      })
      .catch((error) => {
        setDrinksListError({ meals: error });
      });
  };

  // tabata
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
    drinksListByIngre,
    setDrinksListByIngre,
    drinksListByName,
    setDrinksListByName,
    drinksListByFirstLetter,
    setDrinksListByFirstLetter,
    drinksListError,
    setDrinksListError,
    getDrinksList,
    drinks,
    drinksByCategory,
    categories,
    filterCategory,
    setFilterCategory,
    setDrinksByCategory,
  };

  return (
    <DrinksContext.Provider
      value={ context }
    >
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
