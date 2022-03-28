import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FoodContext from './FoodContext';
import { fetchFood } from '../services/fetchFood';

function FoodProvider({ children }) {
  const [foodList, setFoodList] = useState({ data: [] });
  
  const getfoodList = () => {
    fetchFood()
      .then((response) => {
        setFoodList(response);
      })
      .catch((error) => {
        setPlanetListError({ error });
      });
  };

  return (
    <FoodContext.Provider
      value={ {
        foodList,
        setFoodList,
        getfoodList,        
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
