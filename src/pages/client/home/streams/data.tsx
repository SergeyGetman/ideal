import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = '';
// const API_URL = '/api/video';
// TODO delete
import { MOCK } from './_mock';

// hook
export function useData() {
  if (!API_URL) return { isLoading: false, data: MOCK };

  return useQuery('video', async () => {
    const { data } = await axios.get(API_URL);
    return data;
  });
}
