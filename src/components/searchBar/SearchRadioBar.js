// Feito por Gabriel: formulário de busca (input radios e button);
import React from 'react';
import PropTypes from 'prop-types';

function SearchRadioBar({ handleChange, handleSearchBtn }) {
  return (
    <div>
      <label htmlFor="ingredient-search">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="radioSearch"
          id="ingredient-search"
          value="Ingredient"
          onChange={ handleChange }
        />
        Ingredient
      </label>
      <label htmlFor="name-search">
        <input
          data-testid="name-search-radio"
          type="radio"
          name="radioSearch"
          id="name-search"
          value="Name"
          onChange={ handleChange }
        />
        Name
      </label>
      <label htmlFor="first-letter-search">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="radioSearch"
          id="first-letter-search"
          value="First-letter"
          onChange={ handleChange }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearchBtn }
      >
        Search
      </button>
    </div>
  );
}

export default SearchRadioBar;

SearchRadioBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchBtn: PropTypes.func.isRequired,
};
