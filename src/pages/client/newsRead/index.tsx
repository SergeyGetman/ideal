import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { PageHeader } from '@components/pageHeader';
import { PageBody } from '@components/page';
import { NewsRead } from '@components/newsRead';
import { BackLink } from '@components/backLink';
import { Share } from '@components/share';
import { NewsComments } from './comments';
import { RecommendNews } from './recommend';
import { Grid, Spinner } from '@ui';
import { clientRouts } from '@routing/routs';
import { useParams } from 'react-router-dom';

// data
import { useData } from './data';

// styles
import { useStyles } from './styles';

const NewsReadPage = () => {
  const classes = useStyles({});
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useData({ id });

  return isLoading ? (
    <Spinner fixed />
  ) : (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.title} />
      </Helmet>
      <div className={classes.root}>
        <PageHeader path={['news']} rootClassName={classes.header} title={data.title} />
        <div className={classes.container}>
          <PageBody>
            <Grid container direction="column" spacing={10} wrap="nowrap">
              <Grid item>
                <NewsRead data={data} />
              </Grid>
              <Grid item>
                <NewsComments commentList={data.commentList} newsId={data.id} />
              </Grid>
              <Grid item>
                <div className={classes.linksHolder}>
                  <Grid container justifyContent="space-between" spacing={5}>
                    <Grid item>
                      <BackLink label={t`Back to all news`} to={clientRouts.news} />
                    </Grid>
                    <Grid item>
                      <Share label={t`Share article`} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <RecommendNews newsList={data.recommend} />
              </Grid>
            </Grid>
          </PageBody>
        </div>
      </div>
    </>
  );
};

export default NewsReadPage;
