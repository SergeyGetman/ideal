import { useState, useCallback } from 'react';
import { t } from 'ttag';
import clsx from 'clsx';
import { ButtonBase, SwipeableDrawer, Text } from '@ui';
import { useLocale } from '@contexts/localeContext';
import { LOCALES } from '@utils/locales';

// styles
import { useStyles } from './styles';

export const SelectLocale = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({});
  const { locale, onChangeLocale } = useLocale();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const currentLocale = LOCALES.find((item) => item.value === locale);

  return (
    <>
      <ButtonBase className={classes.caption} onClick={handleOpen}>
        <span className={classes.iconHolder}>
          <img className={classes.icon} src={currentLocale.icon} alt={currentLocale.value} />
        </span>
        <span className={classes.currentLocaleHolder}>{currentLocale.full_name}</span>
        <span className={classes.arrow} />
      </ButtonBase>
      <SwipeableDrawer anchor="right" open={open} onOpen={handleOpen} onClose={handleClose}>
        <div className={classes.content}>
          <Text variant="h5" gutterBottom noWrap>
            {t`Select language`}:
          </Text>
          <ul>
            {LOCALES.map((item, index) => (
              <li className={classes.item} key={index}>
                <ButtonBase
                  className={clsx(classes.option, currentLocale?.value === item.value && classes.optionCurrent)}
                  onClick={() => onChangeLocale(item.value)}
                >
                  <span className={classes.iconHolder}>
                    <img className={classes.icon} src={item.icon} alt={item.value} />
                  </span>
                  {item.full_name}
                </ButtonBase>
              </li>
            ))}
          </ul>
        </div>
      </SwipeableDrawer>
    </>
  );
};
