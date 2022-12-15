import { useState, useCallback, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { t } from 'ttag';
import { clientRouts } from '@routing/routs';
import { useAuthContext } from '@contexts/authContext';
import { Grid, SwipeableDrawer, ButtonBase, SvgIcon } from '@ui';
import { CurrentUser } from '@components/currentUser';
import { ButtonOfDownload } from './components/buttonOfDownload';
import { SocialLinksPanel } from './components/socialLinksSection';
import { SelectLanguageSection } from './components/selectLanguageSection';
import { PokerCastaLogo } from './components/pokerCastaLogo';
import { TopPanel } from '../topPanel';
import { useStyles } from './styles';
import MenuIcon from '@svg_icons/menu.svg';
import MenuCloseIcon from '@svg_icons/cross.svg';
import { ButtonSignInUp } from './components/buttonSignInUp/ButtonSignInUp';

const NAVIGATION = [
  { title: t`Home page`, url: clientRouts.home, exact: true },
  { title: t`Bonuses`, url: clientRouts.bonuses, exact: true },
  { title: t`Referral program`, url: clientRouts.referral, exact: true },
  { title: t`Policies`, url: clientRouts.polices, exact: true },
  { title: t`News`, url: clientRouts.news },
  { title: t`Faq`, url: clientRouts.faq, exact: true },
  { title: t`Rules`, url: clientRouts.articles },
  { title: t`Contacts`, url: clientRouts.contacts, exact: true },
];

const useMenuController = (isVisibleInitially = false) => {
  const [isMenuVisible, setIsMenuVisible] = useState(isVisibleInitially);
  const { pathname } = useLocation();

  const showMenu = useCallback(() => {
    setIsMenuVisible(true);
  }, [setIsMenuVisible]);

  const hideMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, [setIsMenuVisible]);

  useEffect(() => {
    hideMenu();
  }, [pathname, hideMenu]);

  return {
    isMenuVisible,
    showMenu,
    hideMenu,
  };
};

export const PortableMenu = () => {
  const classes = useStyles({});

  const { isMenuVisible, showMenu, hideMenu } = useMenuController();

  const { user } = useAuthContext();

  return (
    <div className={classes.root}>
      <div className={classes.menuHolder}>
        <ButtonBase className={classes.menuButton} onClick={showMenu}>
          <SvgIcon glyph={MenuIcon} className={classes.menuOpenActionIcon} />
        </ButtonBase>
      </div>
      <PokerCastaLogo />
      <Grid item>
        <Grid item className={classes.userOrSignInUpContainer}>
          {!!user ? <CurrentUser /> : <ButtonSignInUp />}
        </Grid>
      </Grid>
      <SwipeableDrawer anchor="left" open={isMenuVisible} onOpen={showMenu} onClose={hideMenu}>
        <TopPanel />
        <div className={classes.root}>
          <div className={classes.menuHolder}>
            <ButtonBase className={classes.menuButtonClose} onClick={hideMenu}>
              <SvgIcon glyph={MenuCloseIcon} className={classes.menuCloseActionIcon} />
            </ButtonBase>
          </div>
          <PokerCastaLogo />
          <Grid item className={classes.userOrSignInUpContainer}>
            {!!user ? <CurrentUser /> : <ButtonSignInUp />}
          </Grid>
        </div>
        <div className={classes.mainPortableMenuWrapper}>
          <Grid className={classes.rollingMenuWrapper} container direction="column" spacing={4} wrap="nowrap">
            {NAVIGATION.map((item, index) => (
              <Grid item key={index} className={classes.rollingMenuLinks}>
                <NavLink exact to={item.url} className={classes.link} activeClassName={classes.activeLink}>
                  {item.title}
                </NavLink>
              </Grid>
            ))}
            <div className={classes.horizontalDivider} />
            <Grid item className={classes.userOrSignInUpContainerSideMenu}>
              {!!user ? <CurrentUser /> : <ButtonSignInUp />}
            </Grid>
            <Grid item>
              <ButtonOfDownload />
            </Grid>
            <div className={classes.horizontalDivider} />
            <SocialLinksPanel />
            <SelectLanguageSection />
          </Grid>
        </div>
      </SwipeableDrawer>
    </div>
  );
};
