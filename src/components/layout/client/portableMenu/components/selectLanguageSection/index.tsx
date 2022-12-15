import { Grid } from '@ui';
import { SITE_NAME } from '@utils/constants';
import { t } from 'ttag';

import { useStyles } from './styles';
import { FooterLocales } from '@components/layout/client/footerLocales';

export const SelectLanguageSection = () => {
  const classes = useStyles({});
  return (
    <>
      <Grid item className={classes.languagesDescription}>
        <p className={classes.languagesDescriptionItem}>
          {SITE_NAME} {t`available in 120 countries in 15 languages:`}
        </p>
      </Grid>
      <Grid item className={classes.locales}>
        <FooterLocales />
      </Grid>
    </>
  );
};
