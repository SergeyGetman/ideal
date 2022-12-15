import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Referral } from '@components/referral';

const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Referral | PokerCasta`}</title>
        <meta name="description" content="Referral | PokerCasta" />
      </Helmet>
      <Referral />
    </>
  );
};

export default ReferralPage;
