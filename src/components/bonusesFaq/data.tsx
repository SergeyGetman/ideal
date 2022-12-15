import { useQuery } from 'react-query';
import axios from 'axios';
import { FAQ_BONUSES_LIST_API_URL } from '@utils/constants';

// hook
export function useData() {
  return useQuery('faq_bonus', async () => {
    const { data } = await axios.get(FAQ_BONUSES_LIST_API_URL);
    return data?.data?.faqList || [];
  });
}
