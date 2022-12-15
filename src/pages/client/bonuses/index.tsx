import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Bonuses } from '@components/bonuses';

const BonusesPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Bonuses | PokerCasta`}</title>
        <meta name="description" content="Bonuses | PokerCasta" />
      </Helmet>
      <Bonuses />
    </>
  );
};

export default BonusesPage;
