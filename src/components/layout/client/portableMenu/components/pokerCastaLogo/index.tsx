import { Grid } from '@ui';
import { PageBody } from '@components/page';
import { Link as RouteLink } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import { SITE_NAME } from '@utils/constants';
import { PokerCastaTagline } from '../pokerCastaTagline/index';
import { useStyles } from './styles';
import LogoSvg from '../../images/logo.svg';
import ArrowSvg from '../../images/arrow.svg';

export const PokerCastaLogo = () => {
  const classes = useStyles({});
  return (
    <Grid item className={classes.wrapperForLogoAndFairGambling}>
      <PageBody>
        <div className={classes.container}>
          <div className={classes.logoHolder}>
            <RouteLink to={clientRouts.home} className={classes.link}>
              <img src={LogoSvg} alt={SITE_NAME} className={classes.image} />
            </RouteLink>
          </div>
          <div className={classes.arrowOfPokerCastaWrapper}>
            <img src={ArrowSvg} alt="picture of arrow" />
          </div>
          <div className={classes.content}>
            <PokerCastaTagline />
          </div>
        </div>
      </PageBody>
    </Grid>
  );
};
