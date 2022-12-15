import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = '';
// const API_URL = '/api/video';
// TODO delete
import { MOCK_LIVE } from './_mock';

// hook
export function useDataLive(params) {
  if (!API_URL) return { isLoading: false, data: MOCK_LIVE };

  return useQuery('news', async () => {
    const { data } = await axios.get(API_URL, {
      params,
    });
    return data;
  });
}
