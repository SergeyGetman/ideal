import { Link as RouteLink } from 'react-router-dom';
import clsx from 'clsx';
import { t, ngettext, msgid } from 'ttag';
import { getDateISO } from '@utils/date';
import { roundNumber } from '@utils/common';
import { SvgIcon, Skeleton } from '@ui';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

// icons
import PlayIcon from '@svg_icons/play.svg';

const getViewCount = (number) => {
  if (!number) return '';
  const thousand = number / 1000;
  if (thousand < 1) {
    return number;
  } else {
    return `${roundNumber(thousand, 1)}k`;
  }
};

const getPluralViewersText = (n) => {
  if (n > 1000) return t`viewers`;
  return ngettext(msgid`viewer`, `viewers`, n);
};

const getPluralViewsText = (n) => {
  if (n > 1000) return t`views`;
  return ngettext(msgid`view`, `views`, n);
};

export const StreamsList = ({ pickFirst, loading, limit, list }) => {
  const classes = useStyles({});

  return (
    <ul className={clsx(classes.list, pickFirst && classes.listPickFirst)}>
      {loading ? (
        <>
          {[...Array(limit)].map((item, index) => {
            return (
              <li key={index} className={classes.item}>
                <div className={classes.imageLink}>
                  <Skeleton variant="rectangular" className={classes.image} />
                </div>
                <div className={classes.info}>
                  <Skeleton className={classes.status} variant="circular" width={16} height={16} />
                  <div className={classes.textHolder}>
                    <div className={classes.text}>
                      <span className={clsx(classes.textItem, classes.statusText)}>
                        <Skeleton variant="text" width={100} />
                      </span>
                      <span className={classes.textItem}>
                        <Skeleton variant="text" width={140} />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </>
      ) : (
        <>
          {list.map((item) => {
            const isLive = item.live;
            return (
              <li key={item.id} className={classes.item}>
                <RouteLink className={classes.imageLink} to={`${clientRouts.streams}/${item.id}`}>
                  <img className={classes.image} src={item.image} alt="" />
                  <span className={classes.playButton}>
                    <SvgIcon size={18} glyph={PlayIcon} />
                  </span>
                  {isLive && <span className={classes.live}>{t`Live`}</span>}
                  {!!item.viewCount && (
                    <span className={classes.count}>
                      {getViewCount(item.viewCount)}{' '}
                      {isLive ? getPluralViewersText(item.viewCount) : getPluralViewsText(item.viewCount)}
                    </span>
                  )}
                </RouteLink>
                <div className={classes.info}>
                  <span className={clsx(classes.status, isLive ? classes.statusLive : classes.statusNonLive)} />
                  <div className={classes.textHolder}>
                    <RouteLink className={classes.text} to={`${clientRouts.streams}/${item.id}`}>
                      <span className={clsx(classes.textItem, classes.statusText)}>
                        {isLive ? t`Live stream` : t`Final table`}
                      </span>
                      <span className={classes.textItem}>
                        {isLive ? (
                          <span>
                            <b>{item.title}</b>
                            {!!item.summ && (
                              <span className={classes.summ}>
                                {item.summ} {'USD'}
                              </span>
                            )}
                          </span>
                        ) : (
                          <span>{getDateISO(item.date)}</span>
                        )}
                      </span>
                    </RouteLink>
                  </div>
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

StreamsList.defaultProps = {
  pickFirst: true,
  loading: false,
  limit: 12,
};
