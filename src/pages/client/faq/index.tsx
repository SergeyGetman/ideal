import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Faq } from '@components/faq';

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`FAQ | PokerCasta`}</title>
        <meta name="description" content="FAQ | PokerCasta" />
      </Helmet>
      <Faq />
    </>
  );
};

export default FaqPage;
