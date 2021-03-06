import PropTypes from 'prop-types';
import React from 'react';

function Thumbnail({ thumb, title }) {
  return (<img
    data-testid="recipe-photo"
    className="food-detail-pic"
    src={ thumb }
    alt={ title }
  />
  );
}

Thumbnail.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
