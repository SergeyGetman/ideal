import { t } from 'ttag';
import { Text } from '@ui';

// styles
import { useStyles } from './styles';

export const Error404 = ({ label }) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <div className={classes.code}>404</div>
      <Text variant="h2">{label}</Text>
    </div>
  );
};

Error404.defaultProps = {
  label: t`Page not found`,
};
