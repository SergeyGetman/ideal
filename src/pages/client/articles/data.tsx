import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { ARTICLE_LIST_API_URL } from '@utils/constants';

// hook
export function useData() {
  return useInfiniteQuery(
    'article',
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get(`${ARTICLE_LIST_API_URL}?count=${pageParam}`);
      return !!data?.data ? data.data : [];
    },
    {
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
    },
  );
}
