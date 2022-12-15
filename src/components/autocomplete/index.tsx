import { useRef } from 'react';
import { t } from 'ttag';
import { FieldLabel } from '@components/fieldLabel';
import {
  Autocomplete as MuiAutocomplete,
  InputAdornment,
  SvgIcon,
  IconButton,
  InputBase,
  FormControl,
  FormHelperText,
  Popper,
} from '@ui';

// colors
import { grey } from '@utils/colors';

// styles
import { useStyles } from './styles';

// icons
import DownIcon from '@svg_icons/arrow-down.svg';
import CrossIcon from '@svg_icons/cross.svg';
import SpinnerIcon from '@svg_icons/spinner.svg';

export const Autocomplete = (props) => {
  const {
    value,
    name,
    label,
    size,
    placeholder,
    error,
    required,
    helperText,
    loading,
    enableIcon,
    clearable,
    disabled,
    autoFocus,
    startAdornment,
    onChange,
    ...otherProps
  } = props;

  const classes = useStyles({});
  const anchorRef = useRef(null);
  const getEndAdornment = () => {
    if (loading) {
      return (
        <InputAdornment position="end" className={classes.endAdornment}>
          <SvgIcon size={16} color={grey[400]} glyph={SpinnerIcon} />
        </InputAdornment>
      );
    }
    if (clearable && value) {
      return (
        <InputAdornment position="end" className={classes.endAdornment}>
          <IconButton
            glyph={CrossIcon}
            disabled={disabled}
            tabIndex={-1}
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onChange(event, null);
            }}
          />
        </InputAdornment>
      );
    }
    if (enableIcon) {
      return (
        <InputAdornment position="end" className={classes.endAdornment}>
          <SvgIcon size={12} color={grey[500]} glyph={DownIcon} className={classes.arrow} />
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <FormControl fullWidth error={!!error}>
      {label && <FieldLabel label={label} required={required} error={!!error} />}
      <div className={classes.holder} ref={anchorRef}>
        <MuiAutocomplete
          value={value}
          classes={{
            // input: classes.input,
            focused: classes.focused,
          }}
          renderInput={(params) => {
            const { InputProps, inputProps } = params;
            return (
              <InputBase
                size={size}
                value={value}
                placeholder={placeholder}
                required={required}
                error={!!error}
                disabled={disabled}
                autoFocus={autoFocus}
                inputRef={InputProps.ref}
                inputProps={{ name, ...inputProps }}
                startAdornment={!!startAdornment && <span className={classes.startAdornment}>{startAdornment}</span>}
                endAdornment={getEndAdornment()}
              />
            );
          }}
          loading={loading}
          disabled={disabled}
          PopperComponent={(props) => (
            <Popper {...props} anchorEl={() => anchorRef.current} style={{ width: '100%' }} placement="bottom-start" />
          )}
          onChange={onChange}
          {...otherProps}
        />
      </div>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

Autocomplete.defaultProps = {
  required: false,
  size: 'medium',
  disablePortal: true,
  freeSolo: false,
  noOptionsText: t`No values`,
  loadingText: t`Loading...`,
  enableIcon: true,
  clearable: false,
  autoSelect: false,
  multiple: false,
  autoHighlight: true,
  disableClearable: true,
  openOnFocus: true,
  selectOnFocus: true,
  filterSelectedOptions: false,
};
