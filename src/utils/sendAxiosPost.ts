import axios from 'axios';

export const sendAxiosPost = (url, data) => {
  return axios({
    method: 'POST',
    url: url,
    data: data,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  });
};
