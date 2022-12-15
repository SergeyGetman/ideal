import { t } from 'ttag';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { clientRouts } from '@routing/routs';
import { Box } from '@ui';
import { useStyles } from './styles';
import { FooterSocials } from '../footerSocials/FooterSocials';

const NAVIGATION = [
  { title: t`Home page`, url: clientRouts.home },
  { title: t`Bonuses`, url: clientRouts.bonuses },
  { title: t`Policies`, url: clientRouts.polices },
  { title: t`News`, url: clientRouts.news },
  { title: t`Deposit Bonus`, url: clientRouts.depositBonus },
  { title: t`Referral program`, url: clientRouts.referral },
  { title: t`Rakeback`, url: clientRouts.rakeback },
  { title: t`Rating System`, url: clientRouts.ranking },
  { title: t`Bot Protection`, url: clientRouts.botProtection },
  { title: t`Rules`, url: clientRouts.articles },
  { title: t`Videos`, url: clientRouts.streams },
  { title: t`Faq`, url: clientRouts.faq },
];

export const FooterNavigation = () => {
  const classes = useStyles({});
  return (
    <ul className={classes.list}>
      {NAVIGATION.map((item, index) => (
        <li key={index} className={classes.listItem}>
          <NavLink exact to={item.url} className={classes.link} activeClassName={classes.activeLink}>
            {item.title}
          </NavLink>
        </li>
      ))}
      <li className={classes.listItem}>
        <NavLink exact to={clientRouts.contacts} className={classes.link} activeClassName={classes.activeLink}>
          {t`Contacts`}
        </NavLink>
      </li>
      <li className={clsx(classes.listItem, classes.listItemFull)}>
        <Box>
          <FooterSocials />
        </Box>
      </li>
    </ul>
  );
};
