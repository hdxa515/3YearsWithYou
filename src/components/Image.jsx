import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, className, alt = 'Image' }) => {
  return (
    <img src={src} alt={alt} className={`max-w-full h-auto ${className}`} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
