import { useEffect, useCallback } from 'react';

export const useKeyPressListener = (list = []) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      list.map((item) => {
        const checkAdditional = item.additionalKey ? event[item.additionalKey] : true;
        if (event.keyCode === item.keyCode && checkAdditional) {
          item.onKeyPress(event);
        }
      });
    },
    [list],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown as EventListener);
    return () => {
      document.removeEventListener('keydown', onKeyDown as EventListener);
    };
  }, [onKeyDown]);
};
