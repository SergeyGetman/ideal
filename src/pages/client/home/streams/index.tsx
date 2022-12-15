import { Link as RouteLink } from 'react-router-dom';
import { t } from 'ttag';
import { Text, Grid, Link, Box, SvgIcon } from '@ui';
import { clientRouts } from '@routing/routs';
import { VideoArchive } from '@components/streams/videoArchive';

// styles
import { useStyles } from './styles';

// icons
import VideoIcon from '@svg_icons/youtube.svg';

export const StreamsSection = () => {
  const classes = useStyles({});
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
            <Text variant="h3" className={classes.title}>
              {t`PokerСasta`} <span>{t`TV`}</span>
            </Text>
          </Grid>
          <Grid item>
            <Link color="secondary" className={classes.link} component={RouteLink} to={clientRouts.streams}>
              <span className={classes.linkIcon}>
                <SvgIcon size={24} glyph={VideoIcon} />
              </span>
              <span>{t`Video archive`}</span>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <VideoArchive className={classes.videoArchiveBlock} />
    </>
  );
};
