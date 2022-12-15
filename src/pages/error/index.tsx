import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Grid } from '@ui';
import { Error404 } from '@components/error404';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Page not found`}</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100%', padding: 30 }}>
        <Grid item xs>
          <Error404 />
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
