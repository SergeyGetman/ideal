import { t } from 'ttag';
import clsx from 'clsx';
import { Link as RouteLink } from 'react-router-dom';
import { Grid, SvgIcon } from '@ui';
import { clientRouts } from '@routing/routs';
import { useStyles } from './styles';
import RightIcon from '@svg_icons/right.svg';
import { ListBonusesObjects } from './ListBonusesObjects';

export const BonusesList = ({ list }) => {
  const classes = useStyles({});
  const listOfBonuses = ListBonusesObjects();
  return (
    <ul className={classes.list}>
      {list.map((bonus) => {
        if (bonus === 'more') {
          return (
            <li key="more" className={clsx(classes.item, 'theme-custom')}>
              <RouteLink className={classes.bonusesTile} to={clientRouts.bonuses}>
                <div>
                  <div className={classes.bonusesTileTitle}>
                    {t`Gет more great conditions and bonuses`}
                    <span className={classes.fireIcon} />
                  </div>
                  <span className={classes.bonusesLink}>{t`Show all`}</span>
                </div>
              </RouteLink>
            </li>
          );
        }
        const item = listOfBonuses.find((item) => item.id === bonus);
        return !!item ? (
          <li key={item.id} className={clsx(classes.item, `theme-${item.theme}`)}>
            <RouteLink className={classes.itemLink} to={item.rout}>
              <div className={classes.imageHolder}>
                <img className={classes.image} src={item.image} alt="" />
              </div>
              <div className={classes.content}>
                {item.content}
                <div className={classes.more}>
                  <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item>{t`More details`}</Grid>
                    <Grid item>
                      <SvgIcon size={16} glyph={RightIcon} />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </RouteLink>
          </li>
        ) : null;
      })}
    </ul>
  );
};
BonusesList.defaultProps = {
  list: ['deposit', 'referral', 'rakeback'], // 'streamersOffer'
};
