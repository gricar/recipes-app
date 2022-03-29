import React, { useEffect, useContext } from 'react';
import DrinksContext from '../../context/DrinksContext';

function MainFoods() {
  const {
    getDrinksList,
    drinksListByIngre,
    // drinksListByName,
    // drinksListByFirstLetter,
  } = useContext(DrinksContext);

  useEffect(() => {
    getDrinksList('drinksListByIngre', 'Orange');
  }, []);

  return (
    <main>
      {
        drinksListByIngre.meals.length !== 0
          && (
            drinksListByIngre.meals.forEach((drinkElem) => { console.log(drinkElem); })
          )
      }
    </main>
  );
}

export default MainFoods;
