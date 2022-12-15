import { useEffect, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { t } from 'ttag';
import { NewsTags, NewsSort, NewsList, SORT_BY } from '@components/news';
import { Text, Grid, Link, Box } from '@ui';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

// data
import { useData } from './data';

const SKELETON_COUNT = 7;

export const NewsSection = () => {
  const classes = useStyles({});
  const [sortValue, setSortValue] = useState(SORT_BY[0].value);
  const [tagValue, setTagValue] = useState(null);

  const { isLoading, data, refetch } = useData({ tag: tagValue, sort: sortValue });
  const newsList = !!data?.newsList ? data?.newsList : [];

  useEffect(() => {
    if (!!refetch) refetch();
  }, [JSON.stringify({ tag: tagValue, sort: sortValue })]);

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
            <Text variant="h3" className={classes.title} noWrap>{t`Poker news`}</Text>
          </Grid>
          <Grid item>
            <Link color="secondary" className={classes.link} component={RouteLink} to={clientRouts.news}>
              {t`Show all news`}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          spacing={4}
          wrap="wrap"
        >
          <Grid item xs>
            <NewsTags value={tagValue} onChange={setTagValue} />
          </Grid>
          <Grid item>
            <NewsSort value={sortValue} onChange={setSortValue} />
          </Grid>
        </Grid>
      </Box>
      <NewsList loading={isLoading} limit={SKELETON_COUNT} list={newsList} />
    </>
  );
};
