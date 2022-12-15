import { useEffect } from 'react';
import { t } from 'ttag';
import { PageBody } from '@components/page';
import { PageHeader } from '@components/pageHeader';
import { CollapseList } from '@components/collapseList';
import { useUrlQueries } from '@hooks/useUrlQueries';
import { Text, Box } from '@ui';
import { Search } from './search';
import { Tabs } from './tabs';
import { useData } from './data';

// styles
import { useStyles } from './styles';

export const Faq = () => {
  const classes = useStyles({});
  const { urlQueries } = useUrlQueries();
  const { isLoading, data, refetch, remove } = useData(urlQueries);

  useEffect(() => {
    if (!!refetch) {
      remove();
      refetch(urlQueries);
    }
  }, [JSON.stringify(urlQueries)]);

  const searchValue = urlQueries['search'];

  return (
    <div className={classes.root}>
      <PageHeader
        rootClassName={classes.header}
        headerClassName={classes.headerBg}
        title={t`Frequently asked question`}
      />
      <div className={classes.container}>
        <PageBody>
          <div className={classes.content}>
            <Text variant="h3" className={classes.headingOfQueryList}>
              {!searchValue ? t`Hello, how can we help?` : t`Search results for the query “${searchValue}”`}
            </Text>
            <div className={classes.searchHolder}>
              <Search />
            </div>
            {!!searchValue && (
              <div className={classes.listHolder}>
                <CollapseList searchValue={searchValue} isLoading={isLoading} list={data} collapse={false} />
              </div>
            )}
            <div className={classes.tabsHolder}>
              <Box sx={{ mb: '30px' }}>
                <Text variant="subtitle1" align="center" color="rgba(101, 108, 145, 0.8)">
                  {t`or choose a category to quickly find the help you need`}
                </Text>
              </Box>
              <Tabs />
            </div>
            {!searchValue && (
              <div className={classes.listHolder}>
                <CollapseList isLoading={isLoading} list={data} collapse={false} />
              </div>
            )}
          </div>
        </PageBody>
      </div>
    </div>
  );
};
