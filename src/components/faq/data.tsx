import { useQuery } from 'react-query';
import axios from 'axios';
import { FAQ_LIST_API_URL } from '@utils/constants';

// hook
export function useData(params) {
  return useQuery('faq', async () => {
    const { data } = await axios.get(FAQ_LIST_API_URL, {
      params,
    });
    return data?.data?.faqList || [];
  });
}
