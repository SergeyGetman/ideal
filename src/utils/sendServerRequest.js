/* eslint-disable no-lonely-if, no-console */

import queryString from 'query-string';
import { isNotUndefined } from '@utils/common';

export function sendPostRequest(
  url,
  postData,
  callBackFunctionFinish,
  callBackFunctionSuccess,
  callBackFunctionError,
  isFile,
) {
  let params = {
    credentials: 'include',
    method: 'GET',
  };

  if (postData && typeof isFile !== 'undefined' && isFile) {
    params = {
      method: 'POST',
      credentials: 'include',
      body: postData,
    };
  } else if (postData) {
    params = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: queryString.stringify(postData),
    };
  }

  //const servUrl = typeof window.newServ !== 'undefined' && window.newServ.length > 0 ? window.newServ : process.env.API_URL;

  // fetch(`${servUrl}/load/${url}`, params)
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response;
    })
    .then((response) => response.json())
    .then((json) => {
      if (isNotUndefined(json.finishSession) && json.finishSession) {
        window.location.href = '/';
      } else if (!json.ok && json.errorcode === 999) {
        //onError(json.error);
        window.location.href = '/';
      } else {
        if (typeof callBackFunctionFinish !== 'undefined' && callBackFunctionFinish != null) {
          callBackFunctionFinish(json);
        }
        if (json.ok && json.data) {
          if (typeof callBackFunctionSuccess !== 'undefined' && callBackFunctionSuccess != null) {
            callBackFunctionSuccess(json.data);
          }
        } else {
          if (typeof callBackFunctionError !== 'undefined' && callBackFunctionError != null) {
            callBackFunctionError(json.error, json.errorCode);
          } else {
            //if (json.error) showErrorMessage(json.error);
          }
        }
      }
    })
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message} URL: ${url}`);
    });
}
