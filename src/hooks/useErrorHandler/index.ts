import { notify } from '@utils/notify';
import { getErrorTranslationText } from '@utils/errors';

// hook
export function useErrorHandler() {
  const handleError = (error = null) => {
    const errorText = getErrorTranslationText(error.message);
    notify(errorText, { type: 'error' });
  };

  return {
    onError: handleError,
  };
}
