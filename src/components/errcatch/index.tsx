import { ErrorBoundary } from 'react-error-boundary';
import { t } from 'ttag';
import { concatStrings } from '@utils/common';
import { Alert, Text } from '@ui';

export const ErrCatch = ({ children, fallback, name, message, onError }) => {
  const errorMesage = concatStrings([message, name], ' - ');

  const renderFallback = () => {
    if (!!fallback) return fallback;
    return process.env.NODE_ENV !== 'production' ? (
      <Alert severity="error">
        <Text align="center">{errorMesage}</Text>
      </Alert>
    ) : null;
  };

  return (
    <ErrorBoundary fallback={renderFallback()} onError={onError}>
      {children}
    </ErrorBoundary>
  );
};

ErrCatch.defaultProps = {
  name: '',
  message: t`Render error`,
  fallback: null,
  onError: null,
};
