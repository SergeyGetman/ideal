import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { PageHeader } from '@components/pageHeader';
import { PageBody } from '@components/page';
import { ArticlesRead } from '@components/articlesRead';
import { BackLink } from '@components/backLink';
import { Share } from '@components/share';
import { ArticlesComments } from './comments';
import { RecommendArticles } from './recommend';
import { Grid, Spinner } from '@ui';
import { clientRouts } from '@routing/routs';
import { useParams } from 'react-router-dom';

// data
import { useData } from './data';

// styles
import { useStyles } from './styles';

const ArticlesReadPage = () => {
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
        <PageHeader path={['articles']} rootClassName={classes.header} title={data.title} />
        <div className={classes.container}>
          <PageBody>
            <div className={classes.content}>
              <Grid container direction="column" spacing={10} wrap="nowrap">
                <Grid item>
                  <ArticlesRead data={data} />
                </Grid>
                <Grid item>
                  <ArticlesComments commentList={data.commentList} articleId={data.id} />
                </Grid>
                <Grid item>
                  <div className={classes.linksHolder}>
                    <Grid container justifyContent="space-between" spacing={5}>
                      <Grid item>
                        <BackLink label={t`Back to all articles`} to={clientRouts.articles} />
                      </Grid>
                      <Grid item>
                        <Share label={t`Share article`} />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item>
                  <RecommendArticles articleList={data.recommend} />
                </Grid>
              </Grid>
            </div>
          </PageBody>
        </div>
      </div>
    </>
  );
};

export default ArticlesReadPage;
