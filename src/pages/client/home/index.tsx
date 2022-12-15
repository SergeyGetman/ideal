import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { HomePageContent } from './content';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{t`PokerCasta`}</title>
        <meta name="description" content="PokerCasta" />
      </Helmet>
      <HomePageContent />
    </>
  );
};

export default HomePage;
