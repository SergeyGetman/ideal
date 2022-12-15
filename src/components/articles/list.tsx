import { Link as RouteLink } from 'react-router-dom';
import clsx from 'clsx';
import { getDateTextISO } from '@utils/date';
import { Skeleton } from '@ui';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

const TEXT_LENGTH_LIMIT = 200;

const getShortText = (text) => {
  const cropPart = text.substring(TEXT_LENGTH_LIMIT);
  return `${text.substring(0, TEXT_LENGTH_LIMIT)}${cropPart.substring(0, cropPart.indexOf(' '))}...`;
};

const checkIsBanner = (index) => {
  if (!index) return false;
  if (index === 1 || index % 4 === 0) return true;
  return false;
};

export const ArticlesList = ({ loading, showAsBanner, list, limit }) => {
  const classes = useStyles({});

  return (
    <ul className={classes.list}>
      {typeof list === 'undefined' || !list.length || loading ? (
        <>
          {[...Array(limit)].map((item, index) => {
            const isBanner = showAsBanner && checkIsBanner(index);
            return (
              <li key={index} className={clsx(classes.item, isBanner && classes.itemTypeBanner)}>
                <div className={classes.itemInner}>
                  <div className={classes.imageHolder}>
                    <Skeleton variant="rectangular" className={classes.image} />
                  </div>
                  <div className={classes.itemContent}>
                    <Skeleton variant="text" width="100%">
                      <div className={classes.caption}>&nbsp;</div>
                    </Skeleton>
                    <div className={classes.text}>
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="90%" />
                      <Skeleton variant="text" width="95%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="60%" />
                    </div>
                    <div className={classes.date}>
                      <Skeleton variant="text" width={100} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </>
      ) : (
        <>
          {list.map((item, index) => {
            const itemText = item.text.length > TEXT_LENGTH_LIMIT ? getShortText(item.text) : item.text;
            const isBanner = !!item.image && showAsBanner && checkIsBanner(index);
            return (
              <li key={item.id} className={clsx(classes.item, isBanner && classes.itemTypeBanner)}>
                <div className={classes.itemInner}>
                  {!!item.image && (
                    <RouteLink className={classes.imageHolder} to={`${clientRouts.articles}/${item.id}`}>
                      <img className={classes.image} src={item.image} alt={item.title} />
                    </RouteLink>
                  )}
                  <div className={classes.itemContent}>
                    <RouteLink className={classes.caption} to={`${clientRouts.articles}/${item.id}`}>
                      {item.title}
                    </RouteLink>
                    <p className={classes.text}>{itemText}</p>
                    {!!item.date && <p className={classes.date}>{getDateTextISO(item.date)}</p>}
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

ArticlesList.defaultProps = {
  limit: 13,
  showAsBanner: true,
  loading: false,
};
