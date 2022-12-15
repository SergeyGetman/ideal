import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Ranking } from '@components/ranking';

const RankingPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Ranking | PokerCasta`}</title>
        <meta name="description" content="Ranking | PokerCasta" />
      </Helmet>
      <Ranking />
    </>
  );
};

export default RankingPage;
