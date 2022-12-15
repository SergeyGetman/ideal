import { useCallback, useState } from 'react';
import { t } from 'ttag';
import clsx from 'clsx';
import { PageBody } from '@components/page';
import { Text, ButtonBase, Zoom, Grid } from '@ui';
import { STEPS } from './utils';
import { useStyles } from './styles';
import { SITE_NAME } from '@utils/constants';
import LogoGreySvg from '@components/depositBonus/images/logo-grey.svg';
import { BonusesList } from '@components/bonusesList';
import { BonusesFaq } from '@components/bonusesFaq';
import ItemsCarousel from 'react-items-carousel';
import CarouselIndicator from '@components/carouselIndicator';

const list = ['more', 'deposit', 'rakeback'];

export const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <div className={classes.bgHolder}>
        <span className={classes.bg} />
      </div>
      <PageBody>
        <div className={classes.container}>
          <Text variant="h4">{t`All you have to do is to follow these 4 simple steps:`}</Text>

          {/* displays on all devices exept mobile  */}
          <div className={classes.stepsHolder}>
            <ul className={classes.tabs}>
              {STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <li key={`button-${index}`} className={clsx(classes.tab, isActive && classes.tabActive)}>
                    <ButtonBase
                      className={classes.stepButton}
                      onClick={useCallback(() => setActiveStep(index), [STEPS])}
                    >
                      <span className={classes.stepIndexHolder}>
                        <span className={classes.stepIndex}>{index + 1}</span>
                      </span>
                      <span className={classes.stepCaption}>{step.caption}</span>
                    </ButtonBase>
                  </li>
                );
              })}
            </ul>
            <div className={classes.tabContent}>
              {STEPS.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <Zoom key={`content-${index}`} in={isActive}>
                    <div className={classes.transition}>
                      <img src={step.image} className={classes.transitionImage} alt="" />
                    </div>
                  </Zoom>
                );
              })}
            </div>
          </div>

          {/* displays carousel on mobile-version */}
          <div className={classes.stepsHolderMobile}>
            <ItemsCarousel requestToChangeActive={setActiveStep} activeItemIndex={activeStep} numberOfCards={1}>
              {STEPS.map((step, index) => {
                return (
                  <ButtonBase
                    key={`button-${index}`}
                    className={classes.stepButton}
                    onClick={useCallback(() => setActiveStep(index), [STEPS])}
                  >
                    <span className={classes.stepIndexHolder}>
                      <span className={classes.stepIndex}>{index + 1}</span>
                    </span>
                    <span className={classes.stepCaption}>{step.caption}</span>
                  </ButtonBase>
                );
              })}
            </ItemsCarousel>

            <ItemsCarousel requestToChangeActive={setActiveStep} activeItemIndex={activeStep} numberOfCards={1}>
              {STEPS.map((step, index) => {
                return (
                  <div key={`content-${index}`}>
                    <img src={step.image} className={classes.tabContent} alt="" />
                  </div>
                );
              })}
            </ItemsCarousel>
            <CarouselIndicator activeItemIndex={activeStep} itemList={STEPS} styles={classes} />
          </div>

          <Text color="textSecondary" gutterBottom>
            {t`Our referral program is the perfect way to celebrate your friend's gaming success.`}
          </Text>
          <Text color="textSecondary">
            {t`Friends, poker and PokerCasta are a win-win-win combination with the money prize at the end!`}
          </Text>
          <div className={classes.internalcontainer}>
            <Grid container alignItems="center" spacing={5}>
              <Grid item>
                <Text color="textSecondary">
                  {t`Always yours,`}
                  <br />
                  {SITE_NAME}
                </Text>
              </Grid>
              <Grid item className={classes.logoHolder}>
                <img src={LogoGreySvg} alt={SITE_NAME} />
              </Grid>
              <Grid item>
                <BonusesList list={list} />
              </Grid>
            </Grid>
            <section className={classes.faqHolder}>
              <PageBody>
                <Text variant="h3" gutterBottom>
                  {t`Frequently asked question about bonuses`}
                </Text>
                <BonusesFaq />
              </PageBody>
            </section>
          </div>
        </div>
      </PageBody>
    </div>
  );
};
