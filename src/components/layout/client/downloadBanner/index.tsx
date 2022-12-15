import { t } from 'ttag';
import { PageBody } from '@components/page';
import { SvgIcon, Glyph, Box } from '@ui';
import { GENERAL_DOWNLOAD_URL } from '@utils/constants';
import { useStyles } from './styles';
import Card1Png from './images/card1.png';
import Card2Png from './images/card2.png';
import Coin1Png from './images/coin1.png';
import Coin2Png from './images/coin2.png';
import AppleIcon from '@svg_icons/apple.svg';
import WindowsIcon from '@svg_icons/windows.svg';
import AndroidIcon from '@svg_icons/android.svg';
import Star1Icon from './images/star1.svg';
import Star2Icon from './images/star2.svg';
import Star3Icon from './images/star3.svg';
import DownloadAppButtonContainer from '@containers/DownloadAppButtonContainer';

const APPS = [
  {
    title: 'iOS',
    url: GENERAL_DOWNLOAD_URL,
    icon: AppleIcon,
  },
  {
    title: 'Windows',
    url: GENERAL_DOWNLOAD_URL,
    icon: WindowsIcon,
  },
  {
    title: 'Android',
    url: GENERAL_DOWNLOAD_URL,
    icon: AndroidIcon,
  },
];

export const DownloadBanner = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <div className={classes.bgHolder}>
        <span className={classes.bg} />
      </div>
      <img className={classes.card1} src={Card1Png} alt="" />
      <img className={classes.card2} src={Card2Png} alt="" />
      <img className={classes.coin1} src={Coin1Png} alt="" />
      <img className={classes.coin2} src={Coin2Png} alt="" />
      <img className={classes.star1} src={Star1Icon} alt="" />
      <img className={classes.star2} src={Star2Icon} alt="" />
      <img className={classes.star3} src={Star3Icon} alt="" />
      <PageBody>
        <div>
          <div className={classes.content}>
            <h4 className={classes.title}>{t`Win with PokerCasta`}</h4>
            <p className={classes.text}>{t`Join our family!`}</p>
            <Box className={classes.links}>
              <Box className={classes.itemavailable}>
                <b>{t`Available on`}:</b>
              </Box>
              <Box className={classes.items}>
                {APPS.map((item, index) => (
                  <Box key={index} className={classes.item}>
                    <a href={item.url} target="_blank" className={classes.link} rel="noreferrer">
                      <span className={classes.iconHolder}>
                        <SvgIcon className={classes.icon} glyph={item.icon} />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </Box>
                ))}
              </Box>
            </Box>
          </div>
          <div className={classes.buttonHolder}>
            <DownloadAppButtonContainer className={classes.button}>
              <span className={classes.buttonCaption}>
                <span className={classes.buttonCaptionText}>{t`Download`}</span>
                <Glyph name="button-arrow" className={classes.buttonArrow} />
              </span>
            </DownloadAppButtonContainer>
          </div>
        </div>
      </PageBody>
    </div>
  );
};
