import { Formik, Form, FormikConfig } from 'formik';
import { Grid, Button, Text } from '@ui';
import { TextPasswordField } from '@components/form';
import { t } from 'ttag';
import { useStyles } from '../../styles';
import { sha256 } from 'js-sha256';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useMemo, useState } from 'react';
import { PROXY_API_URL_UPDATE_PASSWORD, CHECK_REGEX_URL } from '@utils/constants';
import * as yup from 'yup';
import { UnSuccessUpdatePassword } from './unSuccessPasswordUpdate';
import { SuccessUpdatePassword } from './successPasswordUpdate';

const UPDATE_PASSWORD = PROXY_API_URL_UPDATE_PASSWORD;
interface PasswordUpdateFormData {
  password: string;
  recovery_key: string;
  password_again: string;
}

type PasswordUpdateRequestPayload = Omit<PasswordUpdateFormData, 'password_again'>;

export const PasswordUpdate = ({ recoveryKey }) => {
  const classes = useStyles({});
  const [regexPassword, setRegexPassword] = useState();

  useQuery('getting regex', async () => {
    const { data } = await axios.get(CHECK_REGEX_URL);
    setRegexPassword(data.password);
  });

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required(t`Required field`)
      .matches(
        regexPassword,
        t`Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character`,
      ),
    password_again: yup
      .string()
      .required(t`Required field`)
      .oneOf([yup.ref('password'), null], 'Your password does not match the one entered above'),
    remember: yup.bool(),
  });

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation((data: PasswordUpdateRequestPayload) =>
    axios.post(UPDATE_PASSWORD, JSON.stringify(data)),
  );

  const handleSubmit = async ({ password, recovery_key }: PasswordUpdateFormData, { resetForm }) => {
    try {
      await mutateAsync({
        password: sha256(password),
        recovery_key,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      resetForm();
    }
  };

  const formikConfig = useMemo<FormikConfig<PasswordUpdateFormData>>(
    () => ({
      status: 'success',
      validationSchema,
      validateOnMount: true,
      validateOnBlur: true,
      validateOnChange: true,
      initialValues: {
        recovery_key: recoveryKey,
        password: '',
        password_again: '',
      },
      onSubmit: handleSubmit,
    }),
    [handleSubmit],
  );

  if (isError) {
    return <UnSuccessUpdatePassword />;
  }

  if (isSuccess) {
    return <SuccessUpdatePassword />;
  }

  return (
    <Formik {...formikConfig}>
      {({ dirty, isValid }) => (
        <Form>
          <Grid container direction="column" justifyContent="center" spacing={6} wrap="nowrap">
            <Grid item>
              <Text variant="h3" component="div">{t`New password`}</Text>
            </Grid>
            <Grid item>
              <Grid className={classes.contentWrapper} container direction="column" spacing={6} wrap="nowrap">
                <Grid item>
                  <TextPasswordField
                    name="password"
                    label={t`New password`}
                    showHelper={true}
                    placeholder={t`New password`}
                  />
                </Grid>
                <Grid item>
                  <TextPasswordField
                    name="password_again"
                    label={t`New password again`}
                    showHelper={true}
                    placeholder={t`New password again`}
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
                    {t`Change password`}
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
