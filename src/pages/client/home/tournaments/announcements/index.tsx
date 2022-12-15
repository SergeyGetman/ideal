import { useCallback } from 'react';
import { t } from 'ttag';
import { Link as RouteLink } from 'react-router-dom';
import { Text, Grid, Link, Box, Skeleton } from '@ui';
// import { getDateISO } from '@utils/date';
import { thousandSeparator } from '@utils/common';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

// data
import { useData } from './data';

const SKELETON_COUNT = 3;

export const Announcements = () => {
  const classes = useStyles({});
  const { isLoading, data } = useData();

  const getItemTitle = useCallback((text) => {
    const spaceIndex = text.indexOf(' ');
    const firstWord = text.substring(0, spaceIndex);
    const otherText = text.substring(spaceIndex);
    return (
      <>
        <span>{firstWord}</span>
        <span>{otherText}</span>
      </>
    );
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
          wrap="wrap"
        >
          <Grid item xs>
            <Text variant="h3" className={classes.title} noWrap>{t`Top stakes`}</Text>
          </Grid>
          <Grid item>
            <Link color="secondary" className={classes.link} component={RouteLink} to={clientRouts.tournaments}>
              {t`Show all`}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <ul className={classes.list}>
        {isLoading ? (
          <>
            {[...Array(SKELETON_COUNT)].map((item, index) => {
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
            {data.map((item) => {
              return (
                <li key={item.id} className={classes.item}>
                  <RouteLink className={classes.itemLink} to={`${clientRouts.tournaments}/${item.id}`}>
                    <img className={classes.image} src={item.image} alt="" />
                    <div className={classes.itemContent}>
                      <div className={classes.itemText}>
                        <div>
                          {/*!!item.date && <p className={classes.date}>{getDateISO(item.date)}</p>*/}
                          <p className={classes.itemTitle}>{getItemTitle(item.title)}</p>
                        </div>
                      </div>
                      <div className={classes.summ}>
                        {!!item.summ && (
                          <span className={classes.summValue}>
                            {'$'}
                            <span>{thousandSeparator(item.summ)}</span>
                            {'gtd'}
                          </span>
                        )}
                      </div>
                    </div>
                  </RouteLink>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};
