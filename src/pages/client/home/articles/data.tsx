import { useQuery } from 'react-query';
import axios from 'axios';
import { HOME_ARTICLE_LIST_API_URL } from '@utils/constants';

// hook
export function useData() {
  return useQuery('article_home', async () => {
    const { data } = await axios.get(HOME_ARTICLE_LIST_API_URL);
    return !!data?.data ? data.data : [];
  });
}
