import { Link as RouteLink } from 'react-router-dom';
import { t } from 'ttag';
import { ArticlesList } from '@components/articles';
import { Text, Grid, Link, Box } from '@ui';
import { clientRouts } from '@routing/routs';

// styles
import { useStyles } from './styles';

// data
import { useData } from './data';

const SKELETON_COUNT = 6;

export const ArticlesSection = () => {
  const classes = useStyles({});
  const { isLoading, data } = useData();
  const articleList = !!data?.articleList ? data?.articleList : [];

  return (
    <>
      <Box sx={{ marginBottom: '30px' }}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
          wrap="wrap"
        >
          <Grid item xs>
            <Text variant="h3" className={classes.title} noWrap>{t`Poker rules and training`}</Text>
          </Grid>
          <Grid item>
            <Link color="secondary" className={classes.link} component={RouteLink} to={clientRouts.articles}>
              {t`All teaching articles`}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <div className={classes.listHolder}>
        <ArticlesList loading={isLoading} limit={SKELETON_COUNT} list={articleList} />
      </div>
    </>
  );
};
