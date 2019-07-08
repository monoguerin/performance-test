/* eslint-disable react/prop-types */
import React from 'react';

const Image = ({
  alt,
  imageUrl,
  sizes,
  ...props
}) => {
  const [size] = sizes;
  const src = `${imageUrl}?odnWidth=${size}`;

  return (
    <img alt={alt} {...props} src={src} />
  );
};

export default Image;
