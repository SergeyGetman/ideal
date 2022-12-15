import { LocaleContextProvider } from '@contexts/localeContext';
import { MuiThemeProvider } from './theme';
import { NotifyProvider } from '@components/notifyProvider';
import { ReactQueryProvider } from '@components/reactQueryProvider';
import { AuthContextProvider } from '@contexts/authContext';
import { Routing } from './routing';
import { BonusConfigContextProvider } from '@contexts/bonusContext/provider';
import { BrowserRouter } from 'react-router-dom';

export const InitialApp = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <MuiThemeProvider>
          <NotifyProvider>
            <ReactQueryProvider>
              <AuthContextProvider>
                <BonusConfigContextProvider>
                  <Routing />
                </BonusConfigContextProvider>
              </AuthContextProvider>
            </ReactQueryProvider>
          </NotifyProvider>
        </MuiThemeProvider>
      </LocaleContextProvider>
    </BrowserRouter>
  );
};
