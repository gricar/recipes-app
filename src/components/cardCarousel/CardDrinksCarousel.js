import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinksContext from '../../context/DrinksContext';
import './CardCarousel.css';

function CardDrinksCarousel({ quant, dataIdText }) {
  const QTD_RECIPES = quant;
  const { drinks, drinksByCategory } = useContext(DrinksContext);

  const filteredDrinks = () => {
    if (drinksByCategory) {
      return drinksByCategory;
    }
    return drinks;
  };

  return (
    <section className="carousel">
      { filteredDrinks().slice(0, QTD_RECIPES).map(({
        idDrink,
        strDrinkThumb,
        strDrink,
      }, index) => (
        <Link
          key={ idDrink }
          to={ `/drinks/${idDrink}` }
        >
          <div
            className="card-carousel"
            data-testid={ `${index}${dataIdText}` }
          >
            <img
              src={ strDrinkThumb }
              alt={ `receita de${strDrink}` }
              width="100"
              data-testid={ `${index}-card-img` }
            />
            <p
              data-testid={ `${index}-recomendation-title` }
            >
              { strDrink }
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}

CardDrinksCarousel.propTypes = {
  quant: PropTypes.number.isRequired,
  dataIdText: PropTypes.string.isRequired,
};

export default CardDrinksCarousel;
