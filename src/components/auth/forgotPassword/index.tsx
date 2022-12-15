import { t } from 'ttag';
import { useStyles } from './styles';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { useMutation } from 'react-query';
import { TextField } from '@components/form';
import { Grid, Button, Text } from '@ui';
import { PROXY_API_URL_RECOVERY_PASSWORD } from '@utils/constants';
import { useState } from 'react';
import { SuccessRequest } from './components/successForgotPasswordRequest';
import { ErrorRequest } from './components/unsuccessForgotPasswordRequest';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(t`Please enter a valid email`)
    .required(t`Required field`),
});

const API_URL = PROXY_API_URL_RECOVERY_PASSWORD;

export const ForgotPasswordForm = () => {
  const classes = useStyles({});
  const [request, setrequest] = useState(null);
  const { mutateAsync, isLoading } = useMutation((data) => axios.post(API_URL, JSON.stringify(data)));
  const handleSubmit = async (values, { resetForm }) => {
    await mutateAsync(values, {
      onSuccess: () => {
        setrequest(true);
        resetForm();
      },
      onError: () => {
        setrequest(false);
        resetForm();
      },
    });
  };

  const formikConfig = {
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      email: '',
    },
    onSubmit: handleSubmit,
  };

  if (request === null) {
    return (
      <Formik {...formikConfig}>
        {({ dirty, isValid }) => (
          <Form>
            <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
              <Grid item>
                <Text className={classes.contentHeader} variant="h3" component="div">{t`password recovery`}</Text>
              </Grid>
              <Grid item>
                <Grid className={classes.contentWrapper} container direction="column" spacing={6} wrap="nowrap">
                  <Grid item>
                    <p className={classes.actionDescription}>
                      {t`We will send you a link to reset your password to the email specified during registration.`}
                    </p>
                    <TextField
                      name="email"
                      label={t`Email`}
                      placeholder={t`Enter your email`}
                      autoFocus
                      showHelper={false}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      loading={isLoading}
                      fullWidth
                      type="submit"
                      color="primary"
                      size="large"
                      disabled={!dirty || !isValid}
                    >
                      {t`Send Link`}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
  if (request === false) {
    return <ErrorRequest />;
  }
  if (request === true) {
    return <SuccessRequest />;
  }
};
