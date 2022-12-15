import { t } from 'ttag';
import clsx from 'clsx';
import { ButtonBase } from '@ui';
import { TAGS } from '../utils';

// styles
import { useStyles } from './styles';

export const NewsTags = ({ value, onChange }) => {
  const classes = useStyles({});

  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <ButtonBase className={clsx(classes.caption, !value && classes.captionActive)} onClick={() => onChange(null)}>
          {t`All categories`}
        </ButtonBase>
      </li>
      {TAGS.map((item, index) => {
        return (
          <li key={index} className={classes.item}>
            <ButtonBase
              className={clsx(classes.caption, value === item.value && classes.captionActive)}
              onClick={() => onChange(item.value)}
            >
              {item.title}
            </ButtonBase>
          </li>
        );
      })}
    </ul>
  );
};
