/* eslint @typescript-eslint/no-var-requires: 'off' */
import { setDefaultLang, addLocale, useLocale } from 'ttag';
import * as cookie from '@utils/cookie';

// locales date-fns
import { de, es, fr, hi, id, it, ja, ko, ms, pl, uk, pt, th, vi, zhCN } from 'date-fns/locale';

const dateFnsLocaleMap = {
  de,
  es,
  fr,
  hi,
  id,
  it,
  ja,
  ko,
  ms,
  pl,
  uk,
  pt,
  th,
  vi,
  zh: zhCN,
};

const array = Object.keys(dateFnsLocaleMap);

let DEFAULT_LOCALE = 'en';

setDefaultLang(DEFAULT_LOCALE);

const check = array.find((lang) => lang === navigator.language);

if (typeof check == 'undefined') {
  DEFAULT_LOCALE = 'en';
} else {
  DEFAULT_LOCALE = navigator.language;
}

const LOCALE_COOKIE = '__client_locale';

function getLocale() {
  return cookie.get(LOCALE_COOKIE) || DEFAULT_LOCALE;
}

export function saveLocale(locale) {
  cookie.set(LOCALE_COOKIE, locale);
}

export function checkLocale(lang) {
  if (typeof dateFnsLocaleMap[lang] !== 'undefined') {
    return true;
  }
  return false;
}
// setup
export const locale = getLocale();

export const dateFnsLocale = dateFnsLocaleMap[locale];

if (locale) {
  const translationsObj = require(`../i18n/${locale}.po`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}
