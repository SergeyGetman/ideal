import { AuthTypeActionBarItemProps } from '@components/auth/authTypeActionBar/types';
import { Box, Button, Grid, Pseudolink, Text } from '@ui';
import { t } from 'ttag';
import { useCallback } from 'react';

const ForgotPasswordActions = ({ setAuthType }: AuthTypeActionBarItemProps) => {
  const handleSignInClick = useCallback(() => {
    setAuthType('signIn');
  }, [setAuthType]);

  const handleSignUpClick = useCallback(() => {
    setAuthType('signUp');
  }, [setAuthType]);

  return (
    <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
      <Grid item>
        <Box sx={{ textAlign: 'center', fontSize: 16 }}>
          <Pseudolink color="#656C91" dashed onClick={handleSignInClick}>
            {t`Back to sign in`}
          </Pseudolink>
        </Box>
      </Grid>
      <Grid item>
        <Button variant="outlined" fullWidth onClick={handleSignUpClick}>
          <Text color="#E33355">
            <b>{t`Sign up`}</b>
          </Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordActions;
