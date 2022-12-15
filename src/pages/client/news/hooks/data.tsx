import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { NEWS_LIST_API_URL } from '@utils/constants';

// hook
export function useData(params) {
  return useInfiniteQuery(
    'news',
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(`${NEWS_LIST_API_URL}?count=${pageParam}`, {
        params,
      });
      return !!data?.data ? data.data : [];
    },
    {
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
    },
  );
}
