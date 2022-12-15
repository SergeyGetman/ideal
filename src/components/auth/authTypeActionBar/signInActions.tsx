//@ts-nocheck
import { Box, Button, Grid, Pseudolink, Text } from '@ui';
import { t } from 'ttag';
import { AuthTypeActionBarItemProps, AuthTypeActionBarProps } from '@components/auth/authTypeActionBar/types';
import { useCallback } from 'react';
import { useStyles } from '@components/auth/authTypeActionBar/styles';
import { ClassNameMap } from '@mui/styles';

const SignInActions = ({ setAuthType }: AuthTypeActionBarItemProps) => {
  const handleForgotPasswordClick = useCallback(() => {
    setAuthType('forgotPassword');
  }, [setAuthType]);

  const handleSignUpClick = useCallback(() => {
    setAuthType('signUp');
  }, [setAuthType]);

  const classes: ClassNameMap<'root' | 'xsStyles'> = useStyles({});

  return (
    <Grid container direction="column" spacing={6} wrap="nowrap">
      <Grid item>
        <Box sx={classes.xsStyles}>
          <Pseudolink color="#656C91" dashed onClick={handleForgotPasswordClick}>
            {t`Forgot your password?`}
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

export default SignInActions;
