import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { BotProtection } from '@components/botProtection';

const BotProtectionPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`BotProtection | PokerCasta`}</title>
        <meta name="description" content="BotProtection | PokerCasta" />
      </Helmet>
      <BotProtection />
    </>
  );
};

export default BotProtectionPage;
