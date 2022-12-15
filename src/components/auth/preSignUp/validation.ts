import * as yup from 'yup';
import { t } from 'ttag';
import axios from 'axios';
import { API_CHECK_VALIDATION_EMAIL } from '@utils/constants';

const getAge = ({ day, month, year }) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(year, month - 1, day);
  const dobNow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  return today.getFullYear() - dob.getFullYear() - (today < dobNow ? 1 : 0);
};
// const checkEmailUniqueness = (email: string, context: any) => {
//   return axios
//
//     .post<{ is_in_use: boolean }>(API_CHECK_VALIDATION_EMAIL, {
//       email,
//     })
//
//     .then(({ data: { is_in_use } }) => !is_in_use)
//
//     .catch((err) => {
//       console.error(err);
//
//       return false;
//     });
// };
// .test('email_uniqueness', 'Email is already use', checkEmailUniqueness),

export const preSignUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(t`Email is required`)
    .email(t`Please enter a valid email`),
  country: yup
    .object()
    .shape({
      code: yup.string(),
    })
    .nullable()
    .required(t`Country is required`)
    .test('blockCountry', t`Country is blocked for select`, (country) => {
      return !country?.isBanned;
    }),
  birthdate: yup
    .object()
    .shape({
      day: yup
        .string()
        .required(t`Birthday is required`)
        .test(
          'len',
          t`Day field should contain values from 1 to 31"`,
          (val) => !val || (parseInt(val) >= 1 && parseInt(val) <= 31),
        ),
      month: yup
        .string()
        .required(t`Birthday is required`)
        .test(
          'len',
          t`Month field should contain values from 1 to 12`,
          (val) => !val || (parseInt(val) >= 1 && parseInt(val) <= 12),
        ),
      year: yup
        .string()
        .required(t`Birthday is required`)
        .test(
          'len',
          t`Please enter correct age`,
          (val) => !val || (parseInt(val) >= 1940 && parseInt(val) <= new Date().getFullYear() && val.length === 4),
        ),
    })
    .when('country', (country, schema) => {
      return schema.test('age', t`Please enter correct age`, (value) => getAge(value) >= (country?.age || 18));
    }),
  adult: yup.bool().oneOf([true], t`You must agree with terms and conditions`),
  subscribe: yup.bool(),
});
