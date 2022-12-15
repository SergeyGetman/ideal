import { PageBody } from '@components/page';

// images
import MastercardSvg from './images/mastercard.svg';
import MuchBetterSvg from './images/muchBetter.svg';
import NetellerSvg from './images/neteller.svg';
import ScrillSvg from './images/scrill.svg';
import VisaSvg from './images/visa.svg';
import LabsPng from './images/labs.png';
import CertifiedPng from './images/certified.png';
import CuracaoPng from './images/curacao_verified.png';
import AdultSvg from './images/adult.svg';
import { useStyles } from './styles';

const PARTNERS_TOP = [
  { title: 'ITech Labs certified', image: LabsPng, url: null, html: null },
  { title: 'ITech Labs', image: CertifiedPng, url: null, html: null },
  { title: 'adult', image: AdultSvg, url: null, html: null },
  {
    title: 'Curacao License',
    image: CuracaoPng,
    url: '', //'https://licensing.gaming-curacao.com/validator/?lh=ca5f1bbd148d611421b5e1d85e3e0c3d&rlh=cc5d574c38035e0eb4f933828c35eb4e',
    html: '<IFRAME SRC="https://licensing.gaming-curacao.com/validator/?lh=ca5f1bbd148d611421b5e1d85e3e0c3d&template=tseal" WIDTH=150 HEIGHT=50 STYLE="border:none;"></IFRAME>',
  },
];

const PARTNERS_BOTTOM = [
  { title: 'visa', image: VisaSvg },
  { title: 'mastercard', image: MastercardSvg },
  { title: 'scrill', image: ScrillSvg },
  { title: 'muchBetter', image: MuchBetterSvg },
  { title: 'neteller', image: NetellerSvg },
];

export const Partners = () => {
  const classes = useStyles({});

  return (
    <>
      <div className={classes.listHolder}>
        <PageBody>
          <ul className={classes.list}>
            {PARTNERS_TOP.map((item) => (
              <li key={item.title} className={classes.item}>
                {item.url ? (
                  <a className={classes.imageHolder} href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.image} alt={item.title} />
                  </a>
                ) : item.html ? (
                  <span className={classes.imageHolder}>
                    <div dangerouslySetInnerHTML={{ __html: item.html }} />
                  </span>
                ) : (
                  <span className={classes.imageHolder}>
                    <img src={item.image} alt={item.title} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </PageBody>
      </div>
      <div className={classes.listHolder}>
        <PageBody>
          <ul className={classes.list}>
            {PARTNERS_BOTTOM.map((item) => (
              <li key={item.title} className={classes.item}>
                <span className={classes.imageHolder}>
                  <img src={item.image} alt={item.title} />
                </span>
              </li>
            ))}
          </ul>
        </PageBody>
      </div>
    </>
  );
};
