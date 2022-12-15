import { t } from 'ttag';
import { Helmet } from 'react-helmet';
import { DepositBonus } from '@components/depositBonus';

const DepositBonusPage = () => {
  return (
    <>
      <Helmet>
        <title>{t`Deposit Bonus | PokerCasta`}</title>
        <meta name="description" content="Deposit Bonus | PokerCasta" />
      </Helmet>
      <DepositBonus />
    </>
  );
};

export default DepositBonusPage;
