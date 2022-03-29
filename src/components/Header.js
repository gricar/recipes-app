import React from 'react';

function Header() {
  return (
    <header>
      <button data-testid="profile-top-btn" type="button">
        <img
          src=""
          alt="Silhouette of a person." />
      </button>
      <h3 data-testid="page-title">título temporário: Foods</h3>
      <button data-testid="search-top-btn" type="button">
        <img src="" alt="Silhouette of a magnifier." />
      </button>
    </header>
  );
}

export default Header;
