import { useQuery } from 'react-query';
import axios from 'axios';

const API_URL = '';
// const API_URL = '/api/video';
// TODO delete
import { MOCK_ARCHIVE } from './_mock';

// hook
export function useDataArchive() {
  if (!API_URL) return { isLoading: false, data: MOCK_ARCHIVE };

  return useQuery('video', async () => {
    const { data } = await axios.get(API_URL);
    return data;
  });
}
