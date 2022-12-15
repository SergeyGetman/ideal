import { TopLocales } from './topLocales';
import { TopPanel } from './topPanel';
import { Header } from './header';
import { Menu } from './menu';
import { PortableMenu } from './portableMenu';
import { FooterNavigation } from './footerNavigation';
import { Partners } from './partners';
import { FooterLocales } from './footerLocales';
import { Faq } from './faq';
import { DownloadBanner } from './downloadBanner';
import { ErrCatch } from '@components/errcatch';
import { Copyright } from '@components/copyright';
import { PageBody } from '@components/page';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { breakpoints } from '@utils/styles';
import { FooterSocials } from './footerSocials/FooterSocials';
import { useStyles } from './styles';

export const ClientLayout = ({ children }) => {
  const classes = useStyles({});
  const isDesktop = useMediaQuery(`(min-width:${breakpoints['lg']}px)`);

  return (
    <div className={classes.root}>
      {isDesktop && <TopLocales />}
      <TopPanel />
      {!isDesktop && <PortableMenu />}
      <Header />
      {isDesktop && <Menu />}
      <section className={classes.content}>
        <ErrCatch name="layoutChildren">{children}</ErrCatch>
      </section>
      <section className={classes.footer}>
        <Faq />
        <div className={classes.downloadbanner}>
          <DownloadBanner />
        </div>
        <div className={classes.footerNavigationHolder}>
          <PageBody>
            <FooterNavigation />
          </PageBody>
        </div>
        <div className={classes.footerSocialHolder}>
          <FooterSocials />
        </div>
        <div className={classes.bottom}>
          <div className={classes.partnersHolder}>
            <Partners />
          </div>
          <PageBody>
            <div className={classes.footerLocalesHolder}>
              <FooterLocales />
            </div>
            <div className={classes.copyrightHolder}>
              <Copyright />
            </div>
          </PageBody>
        </div>
      </section>
    </div>
  );
};
