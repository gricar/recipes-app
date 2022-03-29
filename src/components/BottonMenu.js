import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import './BottonMenu.css';

//  STCOSTA
function BottonMenu() {
  const history = useHistory();
  return (
    <nav data-testid="footer" className="bottonMenu">
      <button
        src="drinkIcon"
        data-testid="drinks-bottom-btn"
        type="button"
        id="drinkIcon"
        onClick={ () => history.push('/drinks') }
        aria-label="drinkIcon"
      >
        <img src={ drinkIcon } alt="drink" />
      </button>
      <button
        src="exploreIcon"
        data-testid="explore-bottom-btn"
        type="button"
        id="exploreIcon"
        onClick={ () => history.push('/explore') }
        aria-label="exploreIcon"
      >
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button
        src="mealIcon"
        data-testid="food-bottom-btn"
        type="button"
        id="mealIcon"
        onClick={ () => history.push('/foods') }
        aria-label="mealIcon"
      >
        <img src={ mealIcon } alt="meal" />
      </button>
    </nav>
  );
}

export default BottonMenu;
