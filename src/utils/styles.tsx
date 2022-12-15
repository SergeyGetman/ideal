export { makeStyles } from '@mui/styles';
export { alpha, darken, lighten } from '@mui/material/styles';

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
};

export const gradientText = (params) => {
  return {
    '@supports ((background-clip: text) or (-webkit-background-clip: text)) and ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent))':
      {
        backgroundSize: 'cover',
        backgroundColor: 'transparent',
        backgroundImage: `linear-gradient(${params})`,
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
  };
};
