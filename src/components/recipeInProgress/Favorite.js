import React from 'react';

function Favorite() {
  return (
    <button type="button">
      <img
        data-testid="favorite-btn"
        src="src/images/whiteHeartIcon.svg"
        alt="Botão de favoritar."
      />
    </button>
  );
}

export default Favorite;
