/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

const InView = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const wrapperEl = useRef(null);

  useEffect(() => {
    console.log('Hola desde el window', wrapperEl.current, setVisible);
    // Implementar el intersection Observer -- setVisible
  });

  return (
    <div ref={wrapperEl}>
      {visible ? children : null}
    </div>
  );
};

export default InView;
