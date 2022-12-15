import { t } from 'ttag';
import { clientRouts } from '@routing/routs';

// images
import Image1Png from './images/image1.png';
import Image2Png from './images/image2.png';
import Image3Png from './images/image3.png';
import Image4Png from './images/image4.png';

export const LIST = [
  {
    id: 'deposit',
    rout: clientRouts.depositBonus,
    theme: 'purple',
    content: (
      <>
        {t`Get`}{' '}
        <span className="gradientText" style={{ whiteSpace: 'nowrap' }}>
          1000 €
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
        {t`Invite friend and get`} <span className="gradientText">10%</span> {t`of his rake`}
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
        {t`Rakeback bonus`} <span className="gradientText rakebackBonus">25%</span>
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
