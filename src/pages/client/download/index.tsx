import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Download } from '@components/download';

const DownloadPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Download | PokerCasta`}</title>
        <meta name="description" content="Download | PokerCasta" />
      </Helmet>
      <Download />
    </>
  );
};

export default DownloadPage;
