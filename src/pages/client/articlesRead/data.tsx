import { useQuery } from 'react-query';
import axios from 'axios';
import { FULL_ARTICLE_LIST_API_URL } from '@utils/constants';

// hook
export function useData(params) {
  return useQuery('rules', async () => {
    const { data } = await axios.get(FULL_ARTICLE_LIST_API_URL, { params });
    return !!data?.data ? data?.data : [];
  });
}
