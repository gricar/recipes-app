import PropTypes from 'prop-types';
import React from 'react';

function Title({ title }) {
  return (
    <h1
      data-testid="recipe-title"
    >
      { title }
    </h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
