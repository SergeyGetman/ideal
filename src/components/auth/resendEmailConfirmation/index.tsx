import { t } from 'ttag';
import { Formik, Form } from 'formik';
import { TextField } from '@components/form';
import { Grid, Button, Text } from '@ui';
import { useStyles } from '@components/auth/resendEmailConfirmation/styles';
import { useState } from 'react';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import axios from 'axios';
import { RESET_EMAIL_URL } from '@utils/constants';
import { ErrorRequest } from '@components/auth/forgotPassword/components/unsuccessForgotPasswordRequest';
import { SuccessRequest } from '@components/auth/forgotPassword/components/successForgotPasswordRequest';

const RESET_EMAIL = RESET_EMAIL_URL;

// export interface PropsType {
//   email: Partial<typeof initialValues>;
// }

const validetionShema = yup.object().shape({
  email: yup.string().email('Email not valid').required('Enter your email '),
});

export const ResendEmailConfirmation = () => {
  const [request, setrequest] = useState(null);
  const { mutateAsync, isLoading } = useMutation((data) => axios.post(RESET_EMAIL, JSON.stringify(data)));
  const classes = useStyles({});

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
      <Formik {...formikConfig} validationSchema={validetionShema}>
        {({ dirty, isValid, errors, touched }) => (
          <Form>
            <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
              <Grid item>
                <Text variant="h4" component="div" width="80%">{t`RESEND EMAIL CONFIRMATION`}</Text>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={6} wrap="nowrap" marginTop={25}>
                  <div className={classes.root_style}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    'We sent you an email confirmation link to your email address. Sometimes it can be found in the
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "spam" or "promotions" folder based on your email settings. If you still have not seen the email, no
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    worries – you can resend it again.'
                  </div>
                  <Grid item>
                    {touched.email && errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    <TextField
                      name="email"
                      label={t`Email`}
                      autoFocus={false}
                      autoComplete="off"
                      showHelper={false}
                      placeholder={t`Enter your email`}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      style={{ cursor: 'pointer' }}
                      loading={isLoading}
                      fullWidth
                      type="submit"
                      color="primary"
                      size="large"
                      disabled={!dirty || !isValid}
                    >
                      {t`RESEND LINK`}
                    </Button>
                    <div className={classes.root_password}>Press Sign In once you confirm your email</div>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{ color: 'red', background: 'white', border: '2px solid grey', cursor: 'pointer' }}
                      fullWidth
                      type="submit"
                      size="large"
                      disabled={!isValid || !dirty}
                    >
                      {t`SIGN IN`}
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
