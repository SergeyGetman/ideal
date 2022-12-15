import { NavLink } from 'react-router-dom';
import { t } from 'ttag';
import { PageBody } from '@components/page';
import { SITE_NAME } from '@utils/constants';
import { clientRouts } from '@routing/routs';
import { Glyph } from '@ui';
import DownloadAppButtonContainer from '@containers/DownloadAppButtonContainer';

// styles
import { useStyles } from './styles';
import DesignElem from '../header/images/tail.png';

const NAVIGATION = [
  { title: t`Bonuses`, url: clientRouts.bonuses, exact: true },
  { title: t`Referral program`, url: clientRouts.referral, exact: true },
  { title: t`Policies`, url: clientRouts.polices, exact: true },
  { title: t`News`, url: clientRouts.news },
  { title: t`Faq`, url: clientRouts.faq, exact: true },
  { title: t`Rules`, url: clientRouts.articles },
  { title: t`Contacts`, url: clientRouts.contacts, exact: true },
];

export const Menu = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageBody>
        <div className={classes.container}>
          <div className={classes.buttonHolder}>
            <DownloadAppButtonContainer className={classes.button}>
              <img src={DesignElem} className={classes.buttonDesignFigure} />
              <span className={classes.buttonCaption}>
                <Glyph name="button-arrow" className={classes.buttonArrow} />
                <span className={classes.buttonCaptionText}>
                  {t`Download`}
                  <br />
                  {SITE_NAME}
                </span>
              </span>
            </DownloadAppButtonContainer>
          </div>
          <div className={classes.menuHolder}>
            <ul className={classes.list}>
              {NAVIGATION.map((item, index) => (
                <li key={index} className={classes.listItem}>
                  <NavLink
                    exact={item.exact}
                    to={item.url}
                    className={classes.link}
                    activeClassName={classes.activeLink}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageBody>
    </div>
  );
};
