import { Fragment, useCallback } from 'react';
import { LOCALES } from '@utils/locales';
import { PageBody } from '@components/page';
import { useLocale } from '@contexts/localeContext';
import { ButtonBase } from '@ui';

// styles
import { useStyles } from './styles';

export const TopLocales = () => {
  const classes = useStyles({});
  const { onChangeLocale } = useLocale();

  return (
    <div className={classes.root}>
      <PageBody>
        <ul className={classes.list}>
          {LOCALES.map((item, index) => (
            <Fragment key={item.value}>
              {index > 0 && <li className={classes.divider} />}
              <li className={classes.item}>
                <ButtonBase
                  className={classes.caption}
                  onClick={useCallback(() => {
                    onChangeLocale(item.value);
                  }, [])}
                >
                  <span className={classes.iconHolder}>
                    <img className={classes.icon} src={item.icon} alt={item.value} />
                  </span>
                  {item.short_name}
                </ButtonBase>
              </li>
            </Fragment>
          ))}
        </ul>
      </PageBody>
    </div>
  );
};
