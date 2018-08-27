import React from 'react';
import PropTypes from 'prop-types';

// this is just a function returning a <div>, that's all
const Movie = ({ mov }) => (
  <div>
    <h3>{mov.title}</h3>
  </div>
);

export default Movie;

Movie.propTypes = {
  mov: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
