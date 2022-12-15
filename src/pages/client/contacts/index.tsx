import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { Contacts } from '@components/contacts';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Contacts | PokerCasta`}</title>
        <meta name="description" content="Contacts | PokerCasta" />
      </Helmet>
      <Contacts />
    </>
  );
};

export default ContactsPage;
