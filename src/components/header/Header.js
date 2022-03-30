import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './header.css';
import SearchInputBar from '../searchBar/SearchInputBar';

function Header({ title, searchBtn = true }) {
  const [hasSearchInput, setHasSearchInput] = useState(false);
  return (
    <div>
      <header className="header">
        <Link to="/profile" data-testid="profile-top-btn" src={ profileIcon }>
          <img
            src={ profileIcon }
            alt="profileIcon"
          />
        </Link>
        <h3 data-testid="page-title">{title}</h3>
        {
          searchBtn && (
            <button
              type="button"
              data-testid="search-top-btn"
              className="searchIcon"
              src={ searchIcon }
              onClick={ () => setHasSearchInput(!hasSearchInput) }
            >
              <img
                src={ searchIcon }
                alt="searchIcon"
              />
            </button>
          )
        }
      </header>
      {
        hasSearchInput && <SearchInputBar />
      }
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBtn: PropTypes.bool,
};

Header.defaultProps = {
  searchBtn: true,
};
