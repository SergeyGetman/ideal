import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { StreamersOffer } from '@components/streamersOffer';

const StreamersOfferPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Special offer for streamers! | PokerCasta`}</title>
        <meta name="description" content="Special offer for streamers! | PokerCasta" />
      </Helmet>
      <StreamersOffer />
    </>
  );
};

export default StreamersOfferPage;
