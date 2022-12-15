import { t } from 'ttag';
import { SITE_NAME } from '@utils/constants';
import { PageBody } from '@components/page';
//import { PEOPLE_COUNT, COUNTRIES } from './utils';

// styles
import { useStyles } from './styles';

// images
import LogoSvg from './images/logo.svg';

// const STARS_COUNT = 50;

export const WorldSection = () => {
  const classes = useStyles({});

  // const stars = useMemo(() => {
  //   const list = [];
  //   for (let i = 0; i < STARS_COUNT; i++) {
  //     const position = { top: 'auto', right: 'auto', left: 'auto', bottom: 'auto' };
  //     const horizontal = `${Math.random() * 30}%`;
  //     const vertical = `${Math.random() * 30}%`;
  //     Math.random() > 0.5 ? (position.top = vertical) : (position.bottom = vertical);
  //     Math.random() > 0.5 ? (position.left = horizontal) : (position.right = horizontal);
  //     const size = Math.floor(Math.random() * 3 + 3);
  //     list.push({
  //       ...position,
  //       width: size,
  //       height: size,
  //       opacity: Math.random() * 0.5 + 0.3,
  //       animationDuration: `${Math.random() * 2000 + 2000}ms`,
  //       animationDelay: `${Math.random() * 3000}ms`,
  //     });
  //   }
  //   return list;
  // }, []);

  return (
    <div className={classes.root}>
      <div className={classes.stars}>
        {/*
        {stars.map((item, index) => (
          <span key={index} className={classes.star} style={omitKeyRecursive(item, 'opacity')}>
            <span style={{ opacity: item.opacity }} />
          </span>
        ))}
        <span className={clsx(classes.blink, classes.blinkRed)} />
        <span className={clsx(classes.blink, classes.blinkBlue)} />
        <span className={clsx(classes.flash, classes.flashBlue)} />
        <span className={clsx(classes.flash, classes.flashPurple)} />
        */}
      </div>
      <div className={classes.content}>
        {/*
        <PageBody>
          <p className={classes.title}>{t`Whole world`}</p>
          <div className={classes.text}>
            {t`Registered`}
            <span className={classes.countText} title={PEOPLE_COUNT}>
              {PEOPLE_COUNT}
            </span>
            {t`players`}
            <div className={classes.redText}>{t`from all around the world`}</div>
          </div>
        </PageBody>
        <div className={classes.map}>
          {COUNTRIES.map((item, index) => (
            <div key={index} className={classes.mapPin} style={{ transform: `translate(${item.position})` }}>
              <span className={classes.mapPinInner}>
                <span className={classes.mapIcon}>
                  <img src={item.icon} alt={item.title} />
                </span>
                <span className={classes.mapText}>
                  {item.title}
                  <br />
                  {thousandSeparator(item.count)}
                </span>
              </span>
            </div>
          ))}
        </div>
        */}
        <div className={classes.bottom}>
          <PageBody>
            <img src={LogoSvg} className={classes.logo} alt={SITE_NAME} />
            <div className={classes.bottomText}>
              <p>
                <b className={classes.whiteText}>
                  {'Poker'}
                  <span>{'Casta'}</span>
                </b>
                &nbsp;{t`united`}
              </p>
              {t`a huge number of players from all over the world, available in`}&nbsp;
              <span className={classes.whiteText}>{t`120 countries in 15 languages`}</span>
            </div>
          </PageBody>
        </div>
      </div>
    </div>
  );
};
