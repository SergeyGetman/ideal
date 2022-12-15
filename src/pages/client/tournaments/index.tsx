import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Tournaments } from '@components/tournaments';

const TournamentsPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Tournaments | PokerCasta`}</title>
        <meta name="description" content="Tournaments | PokerCasta" />
      </Helmet>
      <Tournaments />
    </>
  );
};

export default TournamentsPage;
