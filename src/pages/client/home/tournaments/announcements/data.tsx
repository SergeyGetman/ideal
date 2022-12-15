import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = '';
// const API_URL = '/api/announcements';
// TODO delete
import { MOCK } from './_mock';

// hook
export function useData() {
  if (!API_URL) return { isLoading: false, data: MOCK };

  return useQuery('announcements', async () => {
    const { data } = await axios.get(API_URL);
    return data;
  });
}
