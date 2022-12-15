import { useHistory, useLocation } from 'react-router-dom';
import { isArray, isNotEmptyArray, isObject } from '@utils/common';

const getUrlQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getQueries = () => {
  const query = getUrlQuery();
  const queries = {};

  // @ts-ignore
  for (const key of query.keys()) {
    queries[key] = query.get(key);
  }
  return queries;
};

const getUrlParams = (values) => {
  const searchParams = [];
  for (const [key, value] of Object.entries(values)) {
    if (value && isArray(value)) {
      // @ts-ignore
      isNotEmptyArray(value) && searchParams.push(`${key}=${encodeURIComponent(value.join())}`);
    } else if (value && !isObject(value)) {
      searchParams.push(`${key}=${encodeURIComponent(value.toString())}`);
    }
  }
  return searchParams;
};

export function useUrlQueries() {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSetUrlQueries = (values) => {
    const searchParams = getUrlParams(values);
    history.push({
      pathname,
      search: isNotEmptyArray(searchParams) ? `?${searchParams.join('&')}` : '',
    });
  };

  return {
    urlQueries: getQueries(),
    onSetQueries: handleSetUrlQueries,
  };
}
