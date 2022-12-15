import { Button, Grid, Text } from '@ui';
import { t } from 'ttag';
import { AuthTypeActionBarItemProps } from '@components/auth/authTypeActionBar/types';
import { useCallback } from 'react';

const SignUpActions = ({ setAuthType }: AuthTypeActionBarItemProps) => {
  const handleClick = useCallback(() => {
    setAuthType('signIn');
  }, [setAuthType]);

  return (
    <Grid container alignItems="center" spacing={5}>
      <Grid item xs>
        <Text color="#656C91" style={{ fontSize: 16 }}>{t`Already have an account?`}</Text>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={handleClick}>
          <Text color="#E33355">
            <b>{t`Sign in`}</b>
          </Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUpActions;
