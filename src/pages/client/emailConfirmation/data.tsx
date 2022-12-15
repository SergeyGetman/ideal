import { useQuery } from 'react-query';
import { sendAxiosGet } from '@utils/sendAxiosGet';
import { CONFIRM_EMAIL_API_URL } from '@utils/constants';

// hook
export function useData(params) {
  return useQuery('confirm_email', async () => {
    try {
      const { data } = await sendAxiosGet(`${CONFIRM_EMAIL_API_URL}?email=${params.email}&key=${params.key} `);
    } catch (e) {
      return 'error';
    }
    return 'success';
  });
}
