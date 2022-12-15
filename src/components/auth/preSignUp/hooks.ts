import { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { sendAxiosPost } from '@utils/sendAxiosPost';
import { SIGN_UP_API_URL_NEW } from '@utils/constants';
import { mapFormValuesToMutationVariables } from '@components/auth/preSignUp/utils';
import { t } from 'ttag';
import { preSignUpValidationSchema } from '@components/auth/preSignUp/validation';

const defaultInitialValues = {
  email: '',
  country: null,
  birthdate: {
    day: '',
    month: '',
    year: '',
  },
  adult: true,
  subscribe: true,
};

export interface PreSignUpFormControllerOptions {
  extraFormData?: any;
  initialValues?: Partial<typeof defaultInitialValues>;
}

export const usePreSignUpFormController = ({ extraFormData, initialValues }: PreSignUpFormControllerOptions) => {
  const [response, setResponse] = useState(null);

  const { mutateAsync: signUpMutation } = useMutation(async (data) => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    // @ts-ignore
    result.components.canvas = '';
    // @ts-ignore
    data.fPrint = JSON.stringify(result);
    // @ts-ignore
    data['dob'] = data.birthYear + '-' + data.birthMonth + '-' + data.birthDay;
    // @ts-ignore
    data['country_id'] = data.country;
    // @ts-ignore
    data['reference_id'] = data.country;
    data['send_marketing_emails'] = true;
    // @ts-ignore
    data['device_info'] = JSON.parse(data.fPrint);
    // or 'https://api.qa.zgambling.com/public/website_sign_up'
    return sendAxiosPost(SIGN_UP_API_URL_NEW, data);
  });

  const handleSubmit = useCallback(
    (values, form) => {
      signUpMutation(
        // @ts-ignore
        mapFormValuesToMutationVariables(values, extraFormData),
        {
          onSuccess: (object: any) => {
            const data = object.data;
            if (object.status >= 200 && object.status < 300) {
              setResponse('success');
              return;
            } else if (object.status >= 300 && object.status < 400) {
              setResponse('redirection');
              return;
            } else if (object.status >= 400 && object.status < 500) {
              setResponse('client error');
              return;
            } else {
              setResponse('error');
            }

            if (data?.ok) {
              const token = data?.token;
              if (!!token) {
                localStorage.setItem('token', token);
              }
              setResponse('success');
            } else {
              if (data?.errorCode) {
                if (data?.errorCode === 1) form.setFieldError(`email`, t`Please enter a valid email`);
                if (data?.errorCode === 2) form.setFieldError(`country`, t`Please select country`);
                if (data?.errorCode === 3) {
                  form.setFieldError(`birthdate.day`, t`Day field should contain values from 1 to 31`);
                  form.setFieldError(`birthdate.month`, t`Month field should contain values from 1 to 12`);
                  form.setFieldError(`birthdate.year`, t`Please enter correct age`);
                }
                if (data?.errorCode === 4) form.setFieldError(`adult`, t`Please agree with terms and conditions`);
              } else {
                setResponse('error');
              }
            }
          },
          onError: () => {
            setResponse('error');
          },
        },
      );
    },
    [setResponse],
  );

  const formikConfig = {
    validationSchema: preSignUpValidationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      ...defaultInitialValues,
      ...initialValues,
      birthdate: {
        ...defaultInitialValues,
        ...initialValues.birthdate,
      },
    },
    onSubmit: handleSubmit,
  };

  return {
    response,
    formikConfig,
  };
};
