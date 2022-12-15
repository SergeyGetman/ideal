import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { PageHeader } from '@components/pageHeader';
import { PageBody } from '@components/page';
import { VideoArchive } from '@components/streams/videoArchive';
import { Grid, Box, Text } from '@ui';

// styles
import { useStyles } from './styles';

const StreamsPage = () => {
  const classes = useStyles({});
  return (
    <>
      <Helmet>
        <title>{t`TV | PokerCasta`}</title>
        <meta name="description" content="TV | PokerCasta" />
      </Helmet>
      <div className={classes.root}>
        <PageHeader
          path={[]}
          rootClassName={classes.header}
          headerClassName={classes.headerBg}
          title={t`PokerCasta TV`}
        />
        <div className={classes.container}>
          <PageBody>
            <div className={classes.content}>
              <Grid container direction="column" spacing={10} wrap="nowrap">
                <Grid item>
                  <Box sx={{ marginBottom: '20px' }}>
                    <Grid container alignItems="center" spacing={4}>
                      <Grid item xs>
                        <Text variant="h3">{t`Video archive`}</Text>
                      </Grid>
                    </Grid>
                  </Box>
                  <VideoArchive />
                </Grid>
              </Grid>
            </div>
          </PageBody>
        </div>
      </div>
    </>
  );
};

export default StreamsPage;
