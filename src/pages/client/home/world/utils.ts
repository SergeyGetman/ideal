import { t } from 'ttag';

// images
import BrazilSvg from './images/brazil.svg';
import CanadaSvg from './images/canada.svg';
import ChinaSvg from './images/china.svg';
import GermanySvg from './images/germany.svg';
import IndiaSvg from './images/india.svg';
import MexicoSvg from './images/mexico.svg';
import AfricaSvg from './images/south-africa.svg';
import RussiaSvg from './images/russia.svg';

export const PEOPLE_COUNT = '1 00 000';

export const COUNTRIES = [
  {
    title: t`Canada`,
    count: 25711,
    icon: CanadaSvg,
    position: '-350px, -120px',
  },
  {
    title: t`Mexico`,
    count: 34892,
    icon: MexicoSvg,
    position: '-395px, -20px',
  },
  {
    title: t`Brazil`,
    count: 16914,
    icon: BrazilSvg,
    position: '-260px, 80px',
  },
  {
    title: t`Germany`,
    count: 26478,
    icon: GermanySvg,
    position: '-5px, -135px',
  },
  {
    title: t`S.Africa`,
    count: 12356,
    icon: AfricaSvg,
    position: '25px, -40px',
  },
  {
    title: t`Russia`,
    count: 11647,
    icon: RussiaSvg,
    position: '175px, -160px',
  },
  {
    title: t`China`,
    count: 41331,
    icon: ChinaSvg,
    position: '370px, -90px',
  },
  {
    title: t`India`,
    count: 39164,
    icon: IndiaSvg,
    position: '230px, -25px',
  },
];
