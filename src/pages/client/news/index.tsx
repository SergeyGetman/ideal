import { useEffect } from 'react';
import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { PageHeader } from '@components/pageHeader';
import { PageBody } from '@components/page';
import { useUrlQueries } from '@hooks/useUrlQueries';
import { NewsList, SORT_BY } from '@components/news';
import { ShowMoreButton } from '@components/showMoreButton';
import { Grid, Box } from '@ui';
import CategoriesList from './components/categoriesSection';
import SortCategoriesList from './components/sortNewsSection';

// data
import { useData } from './hooks/data';

// styles
import { useStyles } from './styles';

const PER_PAGE = 15;

const NewsPage = () => {
  const classes = useStyles({});
  const { urlQueries } = useUrlQueries();

  const newsList = [];
  let showMorePage = true;

  const sortBy = urlQueries['sort'] || SORT_BY[0].value;
  const { isLoading, data, refetch, remove, fetchNextPage, isFetchingNextPage } = useData({
    tag: urlQueries['tag'],
    sort: sortBy,
  });

  if (!!data?.pages) {
    data.pages.map((page) => {
      if (!!page?.newsList) {
        page.newsList.map((item) => {
          newsList.push(item);
        });
        showMorePage = page?.showMore;
      }
    });
  }

  const handleFetchMore = () => {
    fetchNextPage();
  };

  useEffect(() => {
    if (!!refetch) {
      remove();
      refetch(urlQueries);
    }
  }, [JSON.stringify(urlQueries)]);

  return (
    <>
      <Helmet>
        <title>{t`News | PokerCasta`}</title>
        <meta name="description" content="News | PokerCasta" />
      </Helmet>
      <div className={classes.root}>
        <PageHeader
          path={[]}
          rootClassName={classes.header}
          headerClassName={classes.headerBg}
          title={t`World poker news`}
        />
        <div className={classes.container}>
          <PageBody>
            <div className={classes.content}>
              <Box sx={{ marginBottom: '20px' }}>
                <Grid
                  container
                  direction={{ xs: 'column', sm: 'row', lg: 'row' }}
                  alignItems={{ xs: 'center', sm: 'baseline' }}
                  spacing={4}
                >
                  <CategoriesList />
                  <SortCategoriesList />
                </Grid>
              </Box>
              <NewsList loading={isLoading} limit={PER_PAGE} list={newsList} />
              {!!newsList.length && showMorePage && (
                <>
                  <Box sx={{ marginTop: '40px' }}>
                    <ShowMoreButton
                      caption={t`Load more news`}
                      loading={isFetchingNextPage}
                      onClick={handleFetchMore}
                    />
                  </Box>
                </>
              )}
            </div>
          </PageBody>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
