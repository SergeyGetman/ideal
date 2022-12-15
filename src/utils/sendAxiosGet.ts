import axios from 'axios';

export const sendAxiosGet = (url) => {
  return axios({
    method: 'GET',
    url: url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  });
};
