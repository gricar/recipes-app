import React from 'react';

function Share() {
  return (
    <button type="button">
      <img
        data-testid="share-btn"
        src="src/images/shareIcon.svg"
        alt="Botão de compartilhar."
      />
    </button>
  );
}

export default Share;
