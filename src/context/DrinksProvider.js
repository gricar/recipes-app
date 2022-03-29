import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DrinksContext from './DrinksContext';
import fetchDrinks from '../services/fetchDrinks';

// STCOSTA
function DrinksProvider({ children }) {
  const [drinksListByIngre, setDrinksListByIngre] = useState({ drinks: [] });
  const [drinksListByName, setDrinksListByName] = useState({ drinks: [] });
  const [drinksListByFirstLetter, setDrinksListByFirstLetter] = useState({ drinks: [] });
  const [drinksListError, setDrinksListError] = useState({ drinks: [] });

  const getDrinksList = (searchType, searchDrink) => {
    fetchDrinks(searchType, searchDrink)
      .then((response) => {
        if (searchType === 'Ingredient') {
          setDrinksListByIngre(response);
        } else if (searchType === 'Name') {
          setDrinksListByName(response);
        } else {
          setDrinksListByFirstLetter(response);
        }
      })
      .catch((error) => {
        drinksListError({ meals: error });
      });
  };

  return (
    <DrinksContext.Provider
      value={ {
        drinksListByIngre,
        setDrinksListByIngre,
        drinksListByName,
        setDrinksListByName,
        drinksListByFirstLetter,
        setDrinksListByFirstLetter,
        drinksListError,
        setDrinksListError,
        getDrinksList,
      } }
    >
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrinksProvider;
