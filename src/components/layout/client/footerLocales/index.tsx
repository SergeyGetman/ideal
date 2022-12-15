import { useCallback } from 'react';
import { LOCALES } from '@utils/locales';
import { PageBody } from '@components/page';
import { useLocale } from '@contexts/localeContext';
import { ButtonBase } from '@ui';
import { useStyles } from './styles';

export const FooterLocales = () => {
  const classes = useStyles({});
  const { onChangeLocale } = useLocale();
  return (
    <div className={classes.root}>
      <PageBody>
        <ul className={classes.list}>
          {LOCALES.map((item) => (
            <li key={item.value} className={classes.item}>
              <ButtonBase
                className={classes.caption}
                onClick={useCallback(() => {
                  onChangeLocale(item.value);
                }, [])}
              >
                <span className={classes.iconHolder}>
                  <img className={classes.icon} src={item.icon} alt={item.value} />
                </span>
                {item.full_name}
              </ButtonBase>
            </li>
          ))}
        </ul>
      </PageBody>
    </div>
  );
};
