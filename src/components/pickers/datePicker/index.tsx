import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { SvgIcon } from '@ui';

// icons
import LeftIcon from '@svg_icons/left.svg';
import RightIcon from '@svg_icons/right.svg';

export const DatePicker = (props) => {
  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      renderInput={() => null}
      leftArrowIcon={<SvgIcon glyph={LeftIcon} />}
      rightArrowIcon={<SvgIcon glyph={RightIcon} />}
      {...props}
    />
  );
};

DatePicker.defaultProps = {
  allowSameDateSelection: true,
  value: null,

  minDate: null,
  maxDate: null,
  views: ['day'],
  openTo: 'day',
  mask: '__.__.____',
  disableHighlightToday: true,
  disablePast: false,
  disableFuture: false,
};
