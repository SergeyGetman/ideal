import { usePreSignUpFormController } from '@components/auth/preSignUp/hooks';
import { Form, Formik } from 'formik';
import PreSignUpFormFields from '@components/auth/preSignUp/preSignUpFormFields';
import PreSignUpSubmitError from '@components/auth/preSignUp/preSignUpSubmitError';
import PreSignUpSubmitSuccess from '@components/auth/preSignUp/preSignUpSubmitSuccess';
import { CountryList, useGetCountries } from '@components/auth/data';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type ParsedQueryStringItem = string | qs.ParsedQs | string[] | qs.ParsedQs[];

const useGetBirthDateParsed = (birthDate?: ParsedQueryStringItem) => {
  if (typeof birthDate !== 'string') {
    return {
      day: '',
      month: '',
      year: '',
    };
  }

  const [year = '', month = '', day = ''] = birthDate.split('-');

  return {
    year,
    month,
    day,
  };
};

const useGetEmailParsed = (email?: ParsedQueryStringItem) => {
  if (typeof email !== 'string') {
    return '';
  }

  return email;
};

// TODO: fix types
const useGetCountryParsed = (countriesList: CountryList, countryCode?: ParsedQueryStringItem) => {
  if (typeof countryCode !== 'string') {
    return null;
  }

  return countriesList.find(({ code }) => code === countryCode.toUpperCase()) ?? null;
};

export interface PurePreSignUpProps {
  countryList: CountryList;
}

const PurePreSignUpImpl = ({ countryList }: PurePreSignUpProps) => {
  const { data: countriesList, isLoading: isCountryListLoading } = useGetCountries();

  const { search } = useLocation();
  const { email, country, dob } = qs.parse(search.replace(/^\?/, ''));

  const parsedBirthDate = useGetBirthDateParsed(dob);
  const parsedEmail = useGetEmailParsed(email);
  const parsedCountry = useGetCountryParsed(countriesList, country);

  const { response, formikConfig } = usePreSignUpFormController({
    initialValues: {
      email: parsedEmail,
      birthdate: parsedBirthDate,
      country: parsedCountry,
    },
  });

  return (
    <Formik {...formikConfig}>
      <Form>
        {!response ? (
          <PreSignUpFormFields countriesList={countriesList} country={parsedCountry} />
        ) : (
          <>{response === 'error' ? <PreSignUpSubmitError /> : <PreSignUpSubmitSuccess />}</>
        )}
      </Form>
    </Formik>
  );
};

const PurePreSignUp = () => {
  const { data: countryList, isLoading: isCountryListLoading } = useGetCountries();

  if (isCountryListLoading) {
    return null;
  }

  return <PurePreSignUpImpl countryList={countryList} />;
};

export default PurePreSignUp;
