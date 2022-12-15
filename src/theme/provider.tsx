import { StyledEngineProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@ui';
import { theme, getGlobalThemeStyles } from './utils';

const globalStyles = getGlobalThemeStyles();

export const MuiThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyles
        // @ts-ignore
        styles={globalStyles}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
