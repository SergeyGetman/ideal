import { useState } from 'react';
import { t } from 'ttag';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { notify } from '@utils/notify';
import { useLocale } from '@contexts/localeContext';
import { useErrorHandler } from '@hooks/useErrorHandler';
import { TextField } from '@components/form';
import { Grid, Button } from '@ui';
import { HCAPTCHA_SITE_KEY, SEND_MESSAGE_API_URL } from '@utils/constants';
import { sendPostRequest } from '@utils/sendServerRequest';

// styles
import { useStyles } from './styles';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(t`Please enter a valid email`)
    .required(t`Required field`),
  message: yup.string().required(t`Required field`),
  captcha: yup.bool().oneOf([true], ''),
});

const initialValues = {
  email: '',
  message: '',
  captcha: false,
};

export const ContactsForm = () => {
  const classes = useStyles({});
  const { onError } = useErrorHandler();
  const { locale } = useLocale();
  const [isLoading, setIsLoading] = useState(false);

  // const { mutateAsync, isLoading } = useMutation((data) => axios.post(SEND_MESSAGE_API_URL, data));
  //
  // const handleSubmit = async (values, { resetForm }) => {
  //   await mutateAsync(values, {
  //     onError,
  //     onSuccess: () => {
  //       resetForm();
  //       notify(t`Message sent successfully`, { type: 'success' });
  //     },
  //   });

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    sendPostRequest(
      SEND_MESSAGE_API_URL,
      values,
      () => {
        setIsLoading(false);
      },
      (backData) => {
        resetForm();
        notify(backData.message || t`Message sent successfully`, { type: 'success' });
      },
      (error) => {
        onError(error);
      },
    );
  };

  const formikConfig = {
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues,
    onSubmit: handleSubmit,
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={6} wrap="nowrap">
        <Grid item>
          <p className={classes.title}>{t`if you have any questions or want to say hello, just write to us!`}</p>
        </Grid>
        <Grid item>
          <Formik {...formikConfig}>
            {({ dirty, isValid, setFieldValue }) => {
              return (
                <Form>
                  <Grid container direction="column" spacing={6} wrap="nowrap">
                    <Grid item>
                      <TextField
                        label={t`Email`}
                        placeholder={t`Enter your email`}
                        showHelper={false}
                        required
                        name="email"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label={t`Message`}
                        placeholder={t`Your message here`}
                        required
                        name="message"
                        showHelper={false}
                        multiline
                        rows={2}
                      />
                    </Grid>
                    <Grid item>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <HCaptcha
                          languageOverride={locale}
                          sitekey={HCAPTCHA_SITE_KEY}
                          onVerify={() => setFieldValue('captcha', true)}
                        />
                      </div>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        size="large"
                        loading={isLoading}
                        variant="containedGradient"
                        fullWidth
                        disabled={!dirty || !isValid}
                      >
                        {t`Send Message`}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};
