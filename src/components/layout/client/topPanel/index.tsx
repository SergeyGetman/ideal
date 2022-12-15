import { PageBody } from '@components/page';
import { Grid } from '@ui';
import { SocialsLinksSection } from './components/socialLinksSection';
import { LanguagesAndSupportSection } from './components/languagesAndSupportSection';

import { useStyles } from './styles';

export const TopPanel = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageBody>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <SocialsLinksSection />
          <LanguagesAndSupportSection />
        </Grid>
      </PageBody>
    </div>
  );
};
