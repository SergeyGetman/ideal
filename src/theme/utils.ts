import { createTheme, Theme } from '@mui/material/styles';
import { breakpoints, gradientText, alpha } from '@utils/styles';

const PRIMARY_COLOR = '#40174b';
const SECONDARY_COLOR = '#D41841';
const ERROR_COLOR = '#E33355';
const SUCCESS_COLOR = '#0E9B4E';
const TEXT_COLOR = '#3E4776';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const getGlobalThemeStyles = () => {
  return {
    body: {
      minWidth: 320,
      fontSize: 14,
      color: TEXT_COLOR,
      fontFamily: 'Euclid Circular B',
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      outline: 'none',
    },
    button: {
      outline: 'none',
      '&::-moz-focus-inner': {
        border: 0,
      },
    },
    'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    'input[type=number]': {
      MozAppearance: 'textfield',
    },
  };
};

declare module '@mui/material/Button/Button' {
  interface ButtonPropsVariantOverrides {
    containedGradient: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: breakpoints['xs'],
      sm: breakpoints['sm'],
      md: breakpoints['md'],
      lg: breakpoints['lg'],
      xl: breakpoints['xl'],
    },
  },

  palette: {
    primary: {
      main: PRIMARY_COLOR,
      contrastText: '#fff',
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: '#fff',
    },
    error: {
      main: ERROR_COLOR,
      contrastText: '#fff',
    },
    success: {
      main: SUCCESS_COLOR,
      contrastText: '#fff',
    },
    warning: {
      main: '#f08f10',
      contrastText: '#fff',
    },
    info: {
      main: '#1895bd',
      contrastText: '#fff',
    },
    text: {
      primary: TEXT_COLOR,
      secondary: '#656C91',
    },
  },

  spacing: (x) => x * 4,

  typography: {
    fontSize: 14,
    fontFamily: 'Euclid Circular B',
    h1: {},
    h2: {
      fontWeight: 'bold',
      fontSize: '2rem',
      textTransform: 'uppercase',
      '@media screen and (max-width: 768px)': {
        fontSize: '1.875rem',
      },
      '@media screen and (max-width: 576px)': {
        fontSize: '1.325rem',
      },
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      '@media screen and (max-width: 768px)': {
        fontSize: '1.375rem',
      },
      '@media screen and (max-width: 576px)': {
        fontSize: '1.125rem',
      },
    },
    h4: {
      fontWeight: '700',
      fontSize: '1.125rem',
      textTransform: 'uppercase',
      '@media screen and (max-width: 768px)': {
        fontSize: '1rem',
      },
      '@media screen and (max-width: 576px)': {
        fontSize: '0.875rem',
      },
    },
    h5: {},
    h6: {},
    subtitle1: {
      fontWeight: 300,
      fontSize: 16,
    },
    subtitle2: {},
    body1: {
      fontSize: 14,
    },
  },

  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 50,
          height: 50,
          '&.MuiAvatar-colorDefault': {
            fontWeight: 'bold',
            fontSize: 24,
            backgroundColor: SECONDARY_COLOR,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(33, 8, 40, 0.8)',
        },
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: '>',
      },
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          color: 'inherit',
        },
        separator: {
          margin: '0 20px',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'containedGradient' },
          style: {
            '& .MuiButton-label': {
              ...gradientText('#fff, #F4CA93'),
            },
            '&.MuiButton-containedGradientPrimary': {
              backgroundImage: 'linear-gradient(180deg, #0E9B4E, #087138)',
            },
            '&.MuiButton-containedGradientSecondary': {
              backgroundImage: 'linear-gradient(180deg, #E33355, #AF2D46)',
            },
          },
        },
      ],
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        color: 'primary',
        type: 'button',
      },
      styleOverrides: {
        root: {
          height: 50,
          padding: '14px 20px',
          lineHeight: '22px',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: 18,
          borderRadius: 10,
          transition: 'none',
          '&&:hover, &&:active': {
            boxShadow: 'none',
          },
          '&.MuiButton-sizeSmall': {
            height: 40,
            lineHeight: '20px',
            fontSize: 12,
            padding: '10px 15px',
            '@media screen and (min-width: 768px)': {
              fontSize: 14,
            },
            '@media screen and (min-width: 1024px)': {
              fontSize: 16,
            },
          },
          '&.MuiButton-sizeLarge': {
            height: 60,
            lineHeight: '28px',
            fontSize: 16,
            padding: '16px 25px',
            '@media screen and (min-width: 768px)': {
              fontSize: 18,
            },
            '@media screen and (min-width: 1024px)': {
              fontSize: 20,
            },
          },
          '&.MuiButton-outlined': {
            border: '1px solid #CDD9EA',
          },
          '&.MuiButton-contained': {
            boxShadow: 'none',
            color: '#fff',
            '&:hover, &:focus': {
              boxShadow: 'none',
            },
          },
          '&.MuiButton-containedPrimary': {
            backgroundImage: 'linear-gradient(180deg, #0E9B4E, #087138)',
          },
          '&.MuiButton-containedSecondary': {
            backgroundImage: 'linear-gradient(180deg, #E33355, #AF2D46)',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          padding: 0,
          width: 'auto',
          height: 'auto',
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        variant: 'indeterminate',
        color: 'primary',
        size: 40,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          zIndex: 'unset',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          userSelect: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 13,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&.MuiIconButton-edgeStart': {
            marginLeft: 0,
          },
          '&.MuiIconButton-edgeEnd': {
            marginRight: 0,
          },
          '&.MuiIconButton-sizeSmall': {
            width: 32,
            height: 32,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 4px',
          maxHeight: 'none',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        fullWidth: true,
        size: 'medium',
      },
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          backgroundColor: '#EEF3FA',
          border: '3px solid transparent',
          borderRadius: 6,
          transition: 'all 200ms ease',
          '&.MuiInputBase-multiline': {
            padding: '4px 0',
          },
          '&.MuiInputBase-adornedStart': {
            paddingLeft: 0,
          },
          '&.MuiInputBase-adornedEnd': {
            paddingRight: 0,
          },
          '&.Mui-error': {
            borderColor: alpha(ERROR_COLOR, 0.6),
          },
          '&.Mui-focused': {
            backgroundColor: '#fff',
            borderColor: '#FFD542',
          },
        },
        input: {
          height: 50,
          lineHeight: '22px',
          fontSize: 16,
          padding: '14px 20px',
          boxSizing: 'border-box',
          width: '100%',
          flex: 1,
          '&.MuiInputBase-inputAdornedStart': {
            paddingLeft: 0,
          },
          '&.MuiInputBase-inputAdornedEnd': {
            paddingRight: 0,
          },
          '&.MuiInputBase-inputMultiline': {
            height: 'auto',
            padding: '10px 20px',
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: 14,
          textTransform: 'uppercase',
          '&.MuiInputLabel-shrink': {
            position: 'static',
            display: 'block',
            top: 'auto',
            left: 'auto',
            height: 'auto',
            marginBottom: 6,
            transform: 'none',
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
    MuiTooltip: {
      defaultProps: {
        disableInteractive: true,
      },
      styleOverrides: {
        tooltip: {
          fontSize: 13,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'inherit',
      },
      styleOverrides: {
        root: {
          '&.MuiTypography-gutterBottom': {
            marginBottom: '1em',
          },
        },
      },
    },
  },
});
