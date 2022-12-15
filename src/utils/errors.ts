import { t } from 'ttag';

const DEFAULT_ERROR_TEXT = t`An error has occurred`;

const ErrorTranslationText = {
  // TODO add backend error messages
};

export const getErrorTranslationText = (message) => {
  return !!message ? ErrorTranslationText[message] || DEFAULT_ERROR_TEXT : DEFAULT_ERROR_TEXT;
};
