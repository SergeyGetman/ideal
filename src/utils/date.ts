import { t } from 'ttag';
import { isYesterday, isToday, getTime, format, parseISO } from 'date-fns';
import { dateFnsLocale } from '@utils/i18nInit';

export const getCurrentDate = () => {
  return new Date();
};

export const formatDate = (date, template) => {
  return format(date, template, { locale: dateFnsLocale });
};

export const getCurrentDateFormat = () => {
  return formatDate(getTime(new Date()), 'dd.MM.yyyy');
};

export const getCurrentDateFormatTime = () => {
  return formatDate(getTime(new Date()), 'dd.MM.yyyy HH-mm-ss');
};

export const getDate = (date) => {
  return date ? formatDate(date, 'dd.MM.yyyy') : '';
};

export const getDateISO = (date) => {
  return date ? getDate(parseISO(date)) : null;
};

export const getDateTime = (date) => {
  return date ? formatDate(date, 'dd.MM.yyyy HH:mm') : '';
};

export const getDateText = (date) => {
  return date ? formatDate(date, 'MMMM dd, yyyy') : '';
};

export const getDateTimeText = (date) => {
  return date ? formatDate(date, 'MMMM dd, yyyy HH:mm') : '';
};

export const getDateTextISO = (date) => {
  return date ? getDateText(parseISO(date)) : '';
};

export const getDateTimeISO = (date) => {
  return date ? getDateTime(parseISO(date)) : '';
};

export const getDateTimeTextISO = (date) => {
  return date ? getDateTime(parseISO(date)) : '';
};

export const getTextTime = (date) => {
  if (!date) return '';
  if (isYesterday(date)) return `${t`yesterday`} ${formatDate(date, 'HH:mm')}`;
  if (isToday(date)) {
    return `${t`today`} ${formatDate(date, 'HH:mm')}`;
  }
  return getDateTime(date);
};

export const getTextTimeISO = (date) => {
  return date ? getTextTime(parseISO(date)) : null;
};
