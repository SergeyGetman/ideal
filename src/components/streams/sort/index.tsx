import { useState, useCallback } from 'react';
import { t } from 'ttag';
import clsx from 'clsx';
import { ButtonBase, SwipeableDrawer, Text, SvgIcon } from '@ui';
import { SORT_BY } from '../utils';

// styles
import { useStyles } from './styles';

// icons
import DownIcon from '@svg_icons/down.svg';

export const StreamsSort = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({});

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const currentValue = SORT_BY.find((item) => item.value === value);

  const handleSelect = (selectValue) => {
    setOpen(false);
    onChange(selectValue);
  };

  return (
    <>
      <ButtonBase className={classes.caption} onClick={handleOpen}>
        {currentValue?.title}
        <span className={classes.iconHolder}>
          <SvgIcon size={18} glyph={DownIcon} />
        </span>
      </ButtonBase>
      <SwipeableDrawer anchor="right" open={open} onOpen={handleOpen} onClose={handleClose}>
        <div className={classes.content}>
          <Text variant="h5" gutterBottom noWrap>
            {t`Sort by`}:
          </Text>
          <ul>
            {SORT_BY.map((item, index) => (
              <li className={classes.item} key={index}>
                <ButtonBase
                  className={clsx(classes.option, value === item.value && classes.optionCurrent)}
                  onClick={() => handleSelect(item.value)}
                >
                  {item.title}
                </ButtonBase>
              </li>
            ))}
          </ul>
        </div>
      </SwipeableDrawer>
    </>
  );
};
