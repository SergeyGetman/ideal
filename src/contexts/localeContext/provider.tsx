import { LocaleContext } from './context';
import { locale, saveLocale, dateFnsLocale, checkLocale } from '@utils/i18nInit';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export const LocaleContextProvider = ({ children }) => {
  const handleChangeLocale = (locale) => {
    saveLocale(locale);
    window.location.reload();
  };

  const handleCheckLocale = (locale) => {
    return checkLocale(locale);
  };

  const localeContextValue = {
    locale,
    onChangeLocale: handleChangeLocale,
    checkLocale: handleCheckLocale,
  };

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={dateFnsLocale}>
        {children}
      </LocalizationProvider>
    </LocaleContext.Provider>
  );
};
