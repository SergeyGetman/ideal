import { useStyles } from '../../styles';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { breakpoints } from '@utils/styles';
import { Grid, SvgIcon } from '@ui';
import { SITE_NAME } from '@utils/constants';
import { t } from 'ttag';
import { SelectLocale } from '../../components/selectLocale';
import { NavLink } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import SupportIcon from '@svg_icons/support.svg';

export const LanguagesAndSupportSection = () => {
  const classes = useStyles({});
  const isDesktop = useMediaQuery(`(min-width:${breakpoints['lg']}px)`);
  return (
    <Grid item className={classes.languagesWrapper}>
      <ul className={classes.list}>
        <li className={classes.item}>
          {SITE_NAME} {t`available in 120 countries in 15 languages:`}
        </li>
        <li className={classes.item}>
          <SelectLocale />
        </li>
        {isDesktop && (
          <li className={classes.item}>
            <NavLink exact to={clientRouts.contacts} className={classes.link}>
              <span className={classes.iconHolder}>
                <SvgIcon glyph={SupportIcon} size={20} />
              </span>
              {t`Support`}
            </NavLink>
          </li>
        )}
      </ul>
    </Grid>
  );
};
