// Feito por Gabriel: formulário de busca (input text);
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SearchRadioBar from './SearchRadioBar';
import FoodContext from '../../context/FoodContext';
import DrinksContext from '../../context/DrinksContext';

function SearchInputBar({ title }) {
  const [searchInputs, setSearchInputs] = useState({
    textSearch: '',
    radioSearch: '',
  });

  const { getfoodList } = useContext(FoodContext);
  const { getDrinksList } = useContext(DrinksContext);

  const getList = () => {
    const { textSearch, radioSearch } = searchInputs;
    if (title === 'Foods') {
      getfoodList(radioSearch, textSearch);
    } else if (title === 'Drinks') {
      getDrinksList(radioSearch, textSearch);
    }
  };

  const handleSearchBtn = () => {
    const { textSearch, radioSearch } = searchInputs;
    if (radioSearch === 'First-letter') {
      if (textSearch.length === 1) {
        getList();
      } else {
        return global.alert('Your search must have only 1 (one) character');
      }
    }
    getList();
  };

  const handleChange = ({ target: { name, value } }) => {
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <input
          data-testid="search-input"
          type="text"
          name="textSearch"
          placeholder="Search recipe"
          value={ searchInputs.textSearch }
          onChange={ handleChange }
        />
        <SearchRadioBar
          handleChange={ handleChange }
          handleSearchBtn={ handleSearchBtn }
        />
      </form>
    </div>
  );
}

export default SearchInputBar;

SearchInputBar.propTypes = {
  title: PropTypes.string.isRequired,
};
