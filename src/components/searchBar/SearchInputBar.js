// Feito por Gabriel: formulário de busca (input text);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchRadioBar from './SearchRadioBar';
import fetchFood from '../../services/fetchFood';
import fetchDrinks from '../../services/fetchDrinks';

function SearchInputBar({ title }) {
  const [searchInputs, setSearchInputs] = useState({
    textSearch: '',
    radioSearch: '',
  });
  const [arrFromFetch, setArrFromFetch] = useState([]);

  const getMeal = async () => {
    const { textSearch, radioSearch } = searchInputs;
    if (title === 'Foods') {
      const foodArr = await fetchFood(radioSearch, textSearch);
      setArrFromFetch(foodArr);
    } else if (title === 'Drinks') {
      const drinksArr = await fetchDrinks(radioSearch, textSearch);
      setArrFromFetch(drinksArr);
    }
  };

  const handleSearchBtn = () => {
    const { textSearch, radioSearch } = searchInputs;
    if (radioSearch === 'First-letter') {
      if (textSearch.length === 1) {
        getMeal();
      } else {
        return global.alert('Your search must have only 1 (one) character');
      }
    }
    getMeal();
  };

  const handleChange = ({ target: { name, value } }) => {
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  console.log(arrFromFetch);
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
