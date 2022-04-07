import PropTypes from 'prop-types';
import React from 'react';

function Subtitle({ subtitle }) {
  return (
    <h3
      data-testid="recipe-category"
    >
      { subtitle }
    </h3>

  );
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
