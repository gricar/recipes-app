import React from 'react';
import { useHistory } from 'react-router-dom';
// import drinkIcon from '../images/drinkIcon.svg';
import searchIconColor from '../images/searchIconColor.svg';
import orangeJuice from '../images/orangeJuice.svg';
import yellowPlateIcon from '../images/yellowPlateIcon.svg';
// import exploreIcon from '../images/exploreIcon.svg';
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
        <img src={ orangeJuice } alt="drink" />
      </button>
      <button
        src="exploreIcon"
        data-testid="explore-bottom-btn"
        type="button"
        id="exploreIcon"
        onClick={ () => history.push('/explore') }
        aria-label="exploreIcon"
      >
        <img src={ searchIconColor } alt="explore" />
      </button>
      <button
        src="yellowPlateIcon"
        data-testid="food-bottom-btn"
        type="button"
        id="yellowPlateIcon"
        onClick={ () => history.push('/foods') }
        aria-label="yellowPlateIcon"
      >
        <img src={ yellowPlateIcon } alt="meal" />
      </button>
    </nav>
  );
}

export default BottonMenu;
