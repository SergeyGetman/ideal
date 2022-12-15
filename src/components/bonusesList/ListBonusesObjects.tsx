import { t } from 'ttag';
import { clientRouts } from '@routing/routs';
import Image1Png from './images/image1.png';
import Image2Png from './images/image2.png';
import Image3Png from './images/image3.png';
import Image4Png from './images/image4.png';
import { useBonusConfig } from '@contexts/bonusContext';

export const ListBonusesObjects = () => {
  const { bonusConfig } = useBonusConfig();
  return [
    {
      id: 'deposit',
      rout: clientRouts.depositBonus,
      theme: 'purple',
      content: (
        <>
          {t`Get`}{' '}
          <span className="gradientText" style={{ whiteSpace: 'nowrap' }}>
            {bonusConfig.currency_sign}
            {bonusConfig.deposit_bonus_size}
          </span>{' '}
          {t`Deposit Bonus`}
        </>
      ),
      image: Image1Png,
    },
    {
      id: 'referral',
      rout: clientRouts.referral,
      theme: 'pink',
      content: (
        <>
          {t`Invite friend and get`} <span className="gradientText">{bonusConfig.referral_bonus_percentage}%</span>{' '}
          {t`of his rake`}
        </>
      ),
      image: Image2Png,
    },
    {
      id: 'rakeback',
      rout: clientRouts.rakeback,
      theme: 'green',
      content: (
        <>
          {t`Rakeback bonus`}{' '}
          <span className="gradientText rakebackBonus">{bonusConfig.rakeback_bonus_percentage}%</span>
        </>
      ),
      image: Image3Png,
    },
    {
      id: 'streamersOffer',
      rout: clientRouts.streamersOffer,
      theme: 'blue',
      content: <>{t`Speсial offer for streamers`}</>,
      image: Image4Png,
    },
  ];
};
