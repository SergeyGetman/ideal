import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Polices } from '@components/polices';

const PolicesPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Terms and conditions | PokerCasta`}</title>
        <meta name="description" content="Terms and conditions" />
      </Helmet>
      <Polices />
    </>
  );
};

export default PolicesPage;
