import React, { useRef, useEffect } from 'react';

export const Foo = () => {
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus?.();
  }, [emailInputRef]);
};
