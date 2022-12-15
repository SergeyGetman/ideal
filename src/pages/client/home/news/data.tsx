import { useQuery } from 'react-query';
import axios from 'axios';
import { HOME_NEWS_LIST_API_URL } from '@utils/constants';

// hook
export function useData(params) {
  return useQuery('news_home', async () => {
    const { data } = await axios.get(HOME_NEWS_LIST_API_URL, {
      params,
    });
    return !!data?.data ? data.data : [];
  });
}
