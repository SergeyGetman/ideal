import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { EmailConfirmation } from '@components/emailConfirmation';
import { useUrlQueries } from '@hooks/useUrlQueries';
import { useData } from './data';

const EmailConfirmationPage = () => {
  const { urlQueries } = useUrlQueries();

  const params = {
    email: urlQueries['email'],
    key: urlQueries['key'],
  };
  const { data } = useData(params);

  return (
    <>
      <Helmet>
        <title>{t`Email confirmation | PokerCasta`}</title>
        <meta name="description" content="Email confirmation | PokerCasta" />
      </Helmet>
      <EmailConfirmation data={data} />
    </>
  );
};

export default EmailConfirmationPage;
