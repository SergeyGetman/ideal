import { t } from 'ttag';

// images
import PlayButtonSvg from './images/play-button.svg';
import YoutubeLogoSvg from './images/youtube.svg';

// styles
import { useStyles } from './styles';

const YOUTUBE_BONUSES_URL = '#';

export const Banner = () => {
  const classes = useStyles({});

  return (
    <a className={classes.root} href={YOUTUBE_BONUSES_URL} target="_blank" rel="noreferrer">
      <span className={classes.icon}>
        <img src={PlayButtonSvg} alt="" />
      </span>
      <span className={classes.text}>{t`Video tutorial`}</span>
      <span className={classes.title}>{t`How to get deposit bonus`}</span>
      <img src={YoutubeLogoSvg} alt="" />
    </a>
  );
};
