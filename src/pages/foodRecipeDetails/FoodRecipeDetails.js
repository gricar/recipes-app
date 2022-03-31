import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function FoodRecipeDetails(props) {
  useEffect(() => {
    const { match: { params: { recipeid } } } = props;
    console.log(recipeid);
  }, []);

  return (
    <p>oi do FoodRecipeDetails temporário</p>
  );
}

FoodRecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodRecipeDetails;
