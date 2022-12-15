import { useQuery } from 'react-query';
import axios from 'axios';
import { COUNTRY_LIST_API_URL, COUNTRY_CODE_API_URL, URL_API_COUNTRIES, NEW_COUNTRY_GET_URL } from '@utils/constants';

export const useGetCountriesList = () => {
  const { data = [] } = useQuery('countryList', async () => {
    const { data } = await axios.get(COUNTRY_LIST_API_URL);
    return data?.data?.countryList || [];
  });
  return data;
};

// hook

export function useGetCountryCode() {
  const { data } = useQuery('countryCode', async () => {
    const { data } = await axios.get(COUNTRY_CODE_API_URL);
    return data?.country_code || 'NOTFOUND';
  });

  return data;
}

export interface Country {
  age_restriction: number;
  code: string;
  id: number;
  is_banned: boolean;
  is_prioritized: boolean;
  name: string;
}

export type CountryList = Country[];

export function useGetCountries() {
  const { data = [], ...result } = useQuery('countries', async () => {
    const { data: fetched } = await axios.get<CountryList>(NEW_COUNTRY_GET_URL);
    return fetched || [];
  });

  return {
    ...result,
    data,
  };
}
