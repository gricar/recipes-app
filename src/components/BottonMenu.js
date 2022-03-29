import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function BottonMenu() {
  return (
    <nav data-testid="footer">
      <button
        src="drinkIcon"
        data-testid="drinks-bottom-btn"
        type="button"
        id="drinkIcon"
        aria-label="drinkIcon"
      >
        <img src={ drinkIcon } alt="drink" />
      </button>
      <button
        src="exploreIcon"
        data-testid="explore-bottom-btn"
        type="button"
        id="exploreIcon"
        aria-label="exploreIcon"
      >
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button
        src="mealIcon"
        data-testid="food-bottom-btn"
        type="button"
        id="mealIcon"
        aria-label="mealIcon"
      >
        <img src={ mealIcon } alt="meal" />
      </button>
    </nav>
  );
}

export default BottonMenu;
