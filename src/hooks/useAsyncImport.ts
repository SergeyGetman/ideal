import { useState, useEffect } from 'react';

const defaultFallback = () => {
  return () => null;
};

export const useAsyncImport = (importComponentFn, func = 'default', fallback = null) => {
  const method = func;
  const [component, setComponent] = useState(fallback || defaultFallback);

  useEffect(() => {
    importComponentFn().then((module) => {
      setComponent(() => module[method]);
    });
  }, []);

  return component;
};
