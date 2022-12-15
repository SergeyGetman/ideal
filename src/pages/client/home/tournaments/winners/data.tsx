import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = '';
// const API_URL = '/api/winners';
// TODO delete
import { MOCK } from './_mock';

// hook
export function useData(params) {
  if (!API_URL) return { isLoading: false, data: MOCK };

  return useQuery('winners', async () => {
    const { data } = await axios.get(API_URL, {
      params,
    });
    return data;
  });
}
