import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { StreamsWatch } from '@components/streamsWatch';

const StreamsWatchPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`StreamsWatch | PokerCasta`}</title>
        <meta name="description" content="StreamsWatch | PokerCasta" />
      </Helmet>
      <StreamsWatch />
    </>
  );
};

export default StreamsWatchPage;
