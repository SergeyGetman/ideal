import { Link as RouteLink } from 'react-router-dom';
import { t } from 'ttag';
import { PageBody } from '@components/page';
import { CurrentUser } from '@components/currentUser';
import { Grid } from '@ui';
import { clientRouts } from '@routing/routs';
import { useAuthContext } from '@contexts/authContext';
import { SITE_NAME } from '@utils/constants';
import LogoSvg from './images/logo.svg';
import { useStyles } from './styles';
import { ButtonSignInUp } from '../portableMenu/components/buttonSignInUp/ButtonSignInUp';

export const Header = () => {
  const classes = useStyles({});
  const { user } = useAuthContext();

  return (
    <div className={classes.root}>
      <PageBody>
        <div className={classes.container}>
          <div className={classes.logoHolder}>
            <RouteLink to={clientRouts.home} className={classes.link}>
              <img src={LogoSvg} alt={SITE_NAME} className={classes.image} />
            </RouteLink>
          </div>
          <div className={classes.content}>
            <Grid container direction={{ xs: 'column', lg: 'row' }} alignItems="center" spacing={4}>
              <Grid item xs>
                <h4 className={classes.title}>{t`Home poker online`}</h4>
                <p className={classes.text}>{t`Join recreational poker community!`}</p>
              </Grid>
              <Grid item className={classes.userOreSignInUpContainer}>
                {!!user ? <CurrentUser /> : <ButtonSignInUp />}
              </Grid>
            </Grid>
          </div>
        </div>
      </PageBody>
    </div>
  );
};
