// Feito por Gabriel: formulário de busca (input text);
import React, { useState } from 'react';

function SearchInputBar() {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div>
      <form>
        <input
          data-testid="search-input"
          type="text"
          name="textSearch"
          placeholder="Search recipe"
          value={ searchInputText }
          onChange={ (event) => setSearchInputText(event.target.value) }
        />
      </form>
    </div>
  );
}

export default SearchInputBar;
