import { t } from 'ttag';
import { clientRouts } from '@routing/routs';

// images
import Image1Png from './images/image1.png';
import Image2Png from './images/image2.png';
import Image3Png from './images/image3.png';
import Image4Png from './images/image4.png';

export const LIST = [
  {
    id: 'rating',
    rout: clientRouts.ranking,
    text: t`Effective rating system`,
    image: Image1Png,
  },
  {
    id: 'botProtection',
    rout: clientRouts.botProtection,
    text: t`Ultimate bot protection`,
    image: Image2Png,
  },
  {
    id: 'bonuses',
    rout: clientRouts.bonuses,
    text: t`Best bonus policy`,
    image: Image3Png,
  },
  {
    id: 'referral',
    rout: clientRouts.referral,
    text: t`Profitable referral program`,
    image: Image4Png,
  },
];
