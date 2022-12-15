import { t } from 'ttag';

//images
import Step1Png from './images/step1.png';
import Step2Png from './images/step2.png';
import Step3Png from './images/step3.png';
import Step4Png from './images/step4.png';

export const STEPS = [
  {
    caption: (
      <b>
        {t`Create an account`}
        <br />
        {t`if you still don't have one`}
      </b>
    ),
    image: Step1Png,
  },
  {
    caption: <b>{t`Сlick the "copy referral link" button on the account page`}</b>,
    image: Step2Png,
  },
  {
    caption: <b>{t`Send the link to a friend via whatever channel you prefer`}</b>,
    image: Step3Png,
  },
  {
    caption: (
      <>
        <b>{t`Get the reward for bringing a friend right at the game table.`}</b>&nbsp;
        <br />
        {t`Enjoy playing in the PokerCasta room with your friends.`}
      </>
    ),
    image: Step4Png,
  },
];
