export const isBoolean = (value) => {
  return typeof value === 'boolean';
};

export const isString = (value) => {
  return typeof value === 'string';
};

export const isNumber = (value) => {
  return typeof value === 'number';
};

export const isArray = (value) => {
  return value && Array.isArray(value);
};

export const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
};

export const isArrayTypeof = (array: any[], type: string) => {
  return array.every((item) => typeof item === type);
};

export const isNotEmptyArray = (array) => {
  return isArray(array) && array.length > 0;
};

export const isNotUndefined = (value) => {
  return typeof value !== 'undefined';
};

export const omitKeyRecursive = (value, key) => {
  if (Array.isArray(value)) {
    return value.map((item) => omitKeyRecursive(item, key));
  } else if (value != null && typeof value === 'object') {
    const newObject = {};
    for (const property in value) {
      if (property !== key) {
        newObject[property] = omitKeyRecursive(value[property], key);
      }
    }
    return newObject;
  } else {
    return value;
  }
};

export const compareObjectsKeys = (checkObj, defaultObj) => {
  if (!checkObj) return defaultObj;
  if (!defaultObj) return null;

  const result = {};
  for (const key in defaultObj) {
    if (isObject(defaultObj[key])) {
      result[key] = compareObjectsKeys(checkObj[key], defaultObj[key]);
    } else if (isBoolean(defaultObj[key])) {
      result[key] = isNotUndefined(checkObj[key]) ? checkObj[key] : defaultObj[key];
    } else {
      result[key] = checkObj[key] || defaultObj[key];
    }
  }
  return result;
};

export const sleep = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const concatStrings = (list: string[], separator = ', ') => {
  return list.filter((item) => !!item).join(separator);
};

export const thousandSeparator = (value) => {
  const parts = value.toString().split('.');
  const beforeDot = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts[1] ? `${beforeDot}.${parts[1]}` : beforeDot;
};

export const dotToComma = (value) => {
  return value.replace('.', ',', -1);
};

export const roundNumber = (value, length = 2) => {
  return parseFloat(value.toFixed(length));
};

// less at start
export const sortByKeyASC = (array, key) => {
  return isNotEmptyArray(array) ? array.slice().sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)) : [];
};

// less at end
export const sortByKeyDESC = (array, key) => {
  return isNotEmptyArray(array) ? array.slice().sort((a, b) => (b[key] > a[key] ? 1 : a[key] > b[key] ? -1 : 0)) : [];
};

export const generateString = (length = 10) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    result += charset.charAt(Math.floor(Math.random() * n));
  }
  return result;
};

export const shuffleArray = (array) => {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export const flatList = (array, indexKey, nestedKey, parentIndex) => {
  let result = [];
  if (isNotEmptyArray(array)) {
    array.map((item) => {
      result = result.concat({ ...omitKeyRecursive(item, nestedKey), parentIndex });
      if (isNotEmptyArray(item[nestedKey])) {
        result = result.concat(flatList(item[nestedKey], indexKey, nestedKey, item[indexKey]));
      }
    });
  }
  return result;
};
