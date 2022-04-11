import PropTypes from 'prop-types';
import React from 'react';

function Instructions({ instructions }) {
  return (
    <section
      data-testid="instructions"
    >
      <h3>instructions</h3>
      <p>{ instructions }</p>
    </section>

  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
