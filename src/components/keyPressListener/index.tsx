import { useKeyPressListener } from '@hooks/useKeyPressListener';

export const KeyPressListener = ({ list }) => {
  useKeyPressListener(list);
  return null;
};

KeyPressListener.defaultProps = {
  list: [],
};
