import { t } from 'ttag';
import clsx from 'clsx';
import { Link as RouteLink } from 'react-router-dom';
import { Glyph } from '@ui';
import { clientRouts } from '@routing/routs';
import { PROMO_VIDEO_URL, GENERAL_DOWNLOAD_URL } from '@utils/constants';

// styles
import { useStyles } from './styles';

// images
import TablePng from './images/table.png';

const LINKS = [
  {
    url: GENERAL_DOWNLOAD_URL,
    glyph: 'apple',
  },
  {
    url: GENERAL_DOWNLOAD_URL,
    glyph: 'windows',
  },
  {
    url: GENERAL_DOWNLOAD_URL,
    glyph: 'android',
  },
];

const RenderLinks = () => {
  const classes = useStyles({});

  return (
    <ul className={classes.links}>
      <li className={classes.linksPart}>
        <a href={PROMO_VIDEO_URL} target="_blank" className={classes.link} rel="noreferrer">
          <span className={classes.linksCircle}>
            <Glyph name="instagram" className={classes.linkGlyph} />
          </span>
          <span className={classes.linksCaption}>{t`Watch presentation`}</span>
        </a>
      </li>
      <li className={classes.linksPart}>
        <ul className={classes.linksList}>
          {LINKS.map((item, index) => (
            <li key={index} className={classes.linksItem}>
              <a href={item.url} target="_blank" className={classes.link} rel="noreferrer">
                <span className={classes.linksCircle}>
                  <Glyph name={item.glyph} className={classes.linkGlyph} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

// TODO add separately buttons images
// TODO add parallax symbols
// fix responsive laptop
export const Table = ({ isMobile }) => {
  const classes = useStyles({});

  return (
    <>
      <div className={classes.root}>
        <div className={classes.imageHolder}>
          <img className={classes.image} src={TablePng} alt="" />
          {isMobile && <RenderLinks />}
          <ul className={classes.buttons}>
            <li className={classes.buttonsItem}>
              <a
                href={PROMO_VIDEO_URL}
                target="_blank"
                className={clsx(classes.button, classes.buttonRed)}
                rel="noreferrer"
              >
                <span className={classes.buttonCircle}>
                  <Glyph name="arrow-right" className={classes.buttonGlyph} />
                </span>
                <span className={classes.buttonCaption}>{t`Promo video`}</span>
              </a>
            </li>
            <li className={classes.buttonsItem}>
              <RouteLink to={clientRouts.download} className={clsx(classes.button, classes.buttonGreen)}>
                <span className={classes.buttonCircle}>
                  <Glyph name="button-arrow-fill" className={classes.buttonGlyph} />
                </span>
                <span className={classes.buttonCaption}>{!isMobile ? t`Download` : t`Download & play`}</span>
              </RouteLink>
            </li>
          </ul>
        </div>
      </div>
      {!isMobile && <RenderLinks />}
    </>
  );
};
