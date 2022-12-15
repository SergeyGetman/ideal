import axios from 'axios';
import { PROXY_API_URL_RECOVERY_PASSWORD } from '@utils/constants';
import { BadKeyResponseLayout } from './components/invalidRecaveryKey';
import { PasswordUpdate } from './components/updatePassword';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import queryString from 'query-string';

const API_URL = PROXY_API_URL_RECOVERY_PASSWORD;

export const RecoveryPasswordForm = () => {
  const { search } = useLocation();
  const { key: recoveryKey } = queryString.parse(search);

  const { status } = useQuery('checking key', async () => {
    await axios.get(`${API_URL}?${recoveryKey}`);
  });

  if (status !== 'loading') {
    if (status === 'success') {
      return <PasswordUpdate recoveryKey={recoveryKey} />;
    }
    if (status === 'error') {
      return <BadKeyResponseLayout />;
    }
  } else {
    return <></>;
  }
};
