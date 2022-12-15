// import { t } from 'ttag';
import { getDateTextISO } from '@utils/date';
import { SvgIcon } from '@ui';

// icons
import EyeIcon from '@svg_icons/eye.svg';
import CommentIcon from '@svg_icons/comment.svg';

// styles
import { useStyles } from './styles';

export const ReadItemInfo = ({ data }) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {!!data.date && (
          <li className={classes.item}>
            <p className={classes.date}>{getDateTextISO(data.date)}</p>
          </li>
        )}
        {!!data.viewCount && (
          <li className={classes.item}>
            <span className={classes.actiity}>
              <SvgIcon className={classes.actiityIcon} glyph={EyeIcon} />
              <span>{data.viewCount}</span>
            </span>
          </li>
        )}
        {!!data.commentsCount && (
          <li className={classes.item}>
            <span className={classes.actiity}>
              <SvgIcon className={classes.actiityIcon} glyph={CommentIcon} />
              <span>{data.commentsCount}</span>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
