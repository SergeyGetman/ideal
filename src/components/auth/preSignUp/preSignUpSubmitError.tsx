import { Box, Button, Text } from '@ui';
import { t } from 'ttag';
import { useHistory } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import { useStyles } from '../styles';

const PreSignUpSubmitError = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.response}>
      <div>
        <Text color="#E33355" className={classes.responseTitle}>
          {t`Oops, something went wrong. Registration failed!`}
        </Text>
        <Text>{t`Contact us in any possible way and we will help you!`}</Text>
        <Box sx={{ mt: '40px' }}>
          <Button variant="outlined" fullWidth onClick={() => history.push(clientRouts.contacts)}>
            <Text color="#E33355">
              <b>{t`Contacts`}</b>
            </Text>
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default PreSignUpSubmitError;
