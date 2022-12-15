import { useState } from 'react';
import { t } from 'ttag';
import { InputText } from '../inputText';
import { InputAdornment, Tooltip, IconButton } from '@ui';

// icons
import VisibleIcon from '@svg_icons/visible.svg';
import InvisibleIcon from '@svg_icons/invisible.svg';

// colors
import { grey } from '@utils/colors';

export const InputPassword = (props) => {
  const [showPassword, togglePassword] = useState(false);
  const { value, ...otherProps } = props;
  const handleTogglePassword = () => togglePassword(!showPassword);

  return (
    <InputText
      value={value}
      {...otherProps}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <Tooltip title={!value ? '' : showPassword ? t`Hide password` : t`Show password`}>
            <span>
              <IconButton
                iconColor={grey[500]}
                tabIndex={-1}
                disabled={!value}
                size="small"
                glyph={showPassword ? InvisibleIcon : VisibleIcon}
                onClick={handleTogglePassword}
              />
            </span>
          </Tooltip>
        </InputAdornment>
      }
    />
  );
};
