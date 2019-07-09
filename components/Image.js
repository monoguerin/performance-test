/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';

// sizes = [123, 234, 233];
export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  // let currentSize = sizes[sizes.length-1];
  if(isMobile && !isTablet)
      return sizes[0]
  if (isTablet)
      return sizes[1]
  else
      return sizes[sizes.length-1];
}

const Image = ({
  alt,
  imageUrl,
  sizes,
  ...props
}) => {
  const {
    isMobile,
    isTablet,
  } = useContext(DeviceContext);

  const size = getSize({
    sizes,
    isMobile,
    isTablet,
  });
  const src = `${imageUrl}?odnWidth=${size}`;

  return (
    <img alt={alt} {...props} src={src} />
  );
};

export default Image;
