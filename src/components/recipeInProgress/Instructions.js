import PropTypes from 'prop-types';
import React from 'react';

function Instructions({ instructions }) {
  return (
    <section data-testid="instructions">
      <p>{ instructions }</p>
    </section>

  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
