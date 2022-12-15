import { Link as RouteLink } from 'react-router-dom';
import clsx from 'clsx';
import { getDateTextISO } from '@utils/date';
import { isNotEmptyArray } from '@utils/common';
import { Grid, SvgIcon, Skeleton } from '@ui';
import { clientRouts } from '@routing/routs';
import { TAGS } from './utils';

// icons
import EyeIcon from '@svg_icons/eye.svg';
import CommentIcon from '@svg_icons/comment.svg';
import FireIcon from '@svg_icons/fire.svg';

// styles
import { useStyles } from './styles';

const getTag = (value) => {
  return TAGS.find((item) => item.value === value);
};

export const NewsList = ({ gridLayout, loading, limit, list }) => {
  const classes = useStyles({});

  return (
    <ul className={clsx(classes.list, gridLayout && classes.listGridLayout)}>
      {typeof list === 'undefined' || !list.length || loading ? (
        <>
          {[...Array(limit)].map((item, index) => {
            return (
              <li key={index} className={classes.item}>
                <div className={classes.itemLink}>
                  <Skeleton variant="rectangular" className={classes.image} />
                </div>
              </li>
            );
          })}
        </>
      ) : (
        <>
          {list.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <RouteLink className={classes.itemLink} to={`${clientRouts.news}/${item.id}`}>
                  <img className={classes.image} src={item.image} alt={item.title} />
                  <span className={classes.mask} />
                  <div className={classes.labels}>
                    <Grid container spacing={5} wrap="nowrap">
                      {item.fireLabel ? (
                        <Grid item className={classes.labelHolder}>
                          <span className={classes.label}>
                            <SvgIcon className={classes.labelIcon} glyph={FireIcon} />
                          </span>
                        </Grid>
                      ) : null}
                      {isNotEmptyArray(item.tags) ? (
                        <Grid item xs>
                          <ul className={classes.tags}>
                            {item.tags.map((tag, index) => {
                              const tagObj = getTag(tag);
                              return !!tagObj ? (
                                <li key={index} className={classes.tagsItem}>
                                  <span className={classes.tag}>{tagObj.title}</span>
                                </li>
                              ) : null;
                            })}
                          </ul>
                        </Grid>
                      ) : null}
                    </Grid>
                  </div>
                  <div className={classes.itemContent}>
                    <p className={classes.caption}>{item.title}</p>
                    <Grid container alignItems="center" spacing={5}>
                      <Grid item xs>
                        {!!item.date && <p className={classes.date}>{getDateTextISO(item.date)}</p>}
                      </Grid>
                      {!!item.viewCount && (
                        <Grid item>
                          <span className={classes.actiity}>
                            <SvgIcon className={classes.actiityIcon} glyph={EyeIcon} />
                            <span>{item.viewCount}</span>
                          </span>
                        </Grid>
                      )}
                      {!!item.commentsCount && (
                        <Grid item>
                          <span className={classes.actiity}>
                            <SvgIcon className={classes.actiityIcon} glyph={CommentIcon} />
                            <span>{item.commentsCount}</span>
                          </span>
                        </Grid>
                      )}
                    </Grid>
                  </div>
                </RouteLink>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

NewsList.defaultProps = {
  limit: 15,
  gridLayout: true,
  loading: false,
};
