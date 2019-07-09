/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';

// sizes = [123, 234, 233];
export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  const [
    mobileSize,
    tabletSize,
    desktopSize,
  ] = sizes || [];

  if (!isMobile && !isTablet) {
    return desktopSize || tabletSize || mobileSize;
  }

  if (isTablet) {
    return tabletSize || mobileSize;
  }

  return mobileSize;
};

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
