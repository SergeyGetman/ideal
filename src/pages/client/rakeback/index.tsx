import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Rakeback } from '@components/rakeback';

const RakebackPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Rakeback | PokerCasta`}</title>
        <meta name="description" content="Rakeback | PokerCasta" />
      </Helmet>
      <Rakeback />
    </>
  );
};

export default RakebackPage;
