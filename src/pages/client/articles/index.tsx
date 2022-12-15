import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { PageHeader } from '@components/pageHeader';
import { PageBody } from '@components/page';
import { ArticlesList } from '@components/articles';
import { ShowMoreButton } from '@components/showMoreButton';
import { Box } from '@ui';

// data
import { useData } from './data';

// styles
import { useStyles } from './styles';

const PER_PAGE = 13;

const ArticlesPage = () => {
  const classes = useStyles({});

  const articleList = [];

  const { isLoading, data, fetchNextPage, isFetchingNextPage } = useData();

  if (!!data?.pages) {
    data.pages.map((page) => {
      if (!!page?.articleList) {
        page.articleList.map((item) => {
          articleList.push(item);
        });
      }
    });
  }

  const handleFetchMore = () => {
    fetchNextPage();
  };

  return (
    <>
      <Helmet>
        <title>{t`Articles | PokerCasta`}</title>
        <meta name="description" content="Articles | PokerCasta" />
      </Helmet>
      <div className={classes.root}>
        <PageHeader path={[]} rootClassName={classes.header} title={t`Poker education`} />
        <div className={classes.container}>
          <PageBody>
            <div className={classes.content}>
              <ArticlesList loading={isLoading} limit={PER_PAGE} list={articleList} />
              <Box sx={{ marginTop: '2.5rem' }}>
                <ShowMoreButton
                  caption={t`Load more articles`}
                  loading={isFetchingNextPage}
                  onClick={handleFetchMore}
                />
              </Box>
            </div>
          </PageBody>
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
