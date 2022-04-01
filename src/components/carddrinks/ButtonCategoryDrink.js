// Feito por Tabata;
import React, { useContext } from 'react';
import DrinksContext from '../../context/DrinksContext';

const QTD_FILTERS = 5;

function ButtonCategoryFood() {
  const { categories, filterCategory, setFilterCategory } = useContext(DrinksContext);

  const handleClick = ({ target: { name } }) => {
    if (filterCategory === name) {
      return setFilterCategory('');
    }
    return setFilterCategory(name);
  };

  return (
    <section className="container-button-category">
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
        onClick={ () => setFilterCategory('') }
      >
        All
      </button>
      { categories.slice(0, QTD_FILTERS).map((el) => {
        const keys = Object.values(el);
        return (
          <div key={ keys }>
            <button
              type="button"
              data-testid={ `${keys}-category-filter` }
              name={ keys }
              onClick={ handleClick }
            >
              { keys }
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default ButtonCategoryFood;
