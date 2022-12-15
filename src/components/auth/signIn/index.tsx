import { t } from 'ttag';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useAuthContext } from '@contexts/authContext';
import { TextField, TextPasswordField, CheckboxField } from '@components/form';
import { Grid, Button, Text } from '@ui';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(t`Please enter a valid email`)
    .required(t`Required field`),
  password: yup
    .string()
    .required(t`Required field`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      t`Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character`,
    ),
  remember: yup.bool(),
});

export const SignInForm = () => {
  const { signInLoading, onSignIn } = useAuthContext();

  const formikConfig = {
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    onSubmit: onSignIn,
  };

  return (
    <Formik {...formikConfig}>
      {({ dirty, isValid }) => (
        <Form>
          <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
            <Grid item>
              <Text variant="h3" component="div">{t`Sign in`}</Text>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={6} wrap="nowrap">
                <Grid item>
                  <TextField
                    name="email"
                    label={t`Email`}
                    autoFocus
                    autoComplete="off"
                    showHelper={false}
                    placeholder={t`Enter your email`}
                  />
                </Grid>
                <Grid item>
                  <TextPasswordField
                    name="password"
                    label={t`Password`}
                    showHelper={false}
                    placeholder={t`Enter your password`}
                  />
                </Grid>
                <Grid item>
                  <CheckboxField label={t`Remember me`} name="remember" />
                </Grid>
                <Grid item>
                  <Button
                    loading={signInLoading}
                    fullWidth
                    type="submit"
                    color="primary"
                    size="large"
                    disabled={!dirty || !isValid}
                  >
                    {t`Sign in`}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
