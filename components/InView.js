/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';

const InView = ({
  children,
}) => {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('Intersected', entries);
      const [entry] = entries;

      if (entry.isIntersecting) {
        console.log('VISIBLE!!');
        setVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.25,
    });

    console.log(wrapperRef.current);

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={wrapperRef}>
      {visible ? children : null}
    </div>
  );
};

export default InView;
