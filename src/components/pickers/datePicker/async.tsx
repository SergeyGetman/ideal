import { useAsyncImport } from '@hooks/useAsyncImport';
import { useTheme } from '@hooks/useTheme';
import { SvgIcon } from '@ui';

// icons
import SpinnerIcon from '@svg_icons/spinner.svg';

export const DatePicker = (props) => {
  const { palette } = useTheme();

  const defaultComponent = () => {
    return () => <SvgIcon size={16} color={palette.primary.main} glyph={SpinnerIcon} />;
  };

  const Component = useAsyncImport(
    () =>
      import(
        /* webpackChunkName: "DatePicker" */
        './index'
      ),
    'DatePicker',
    defaultComponent,
  );

  return <Component {...props} />;
};
