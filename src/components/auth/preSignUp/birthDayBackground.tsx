import { forwardRef, RefObject } from 'react';
import { Collapse, Fade, Portal, Text } from '@ui';
import clsx from 'clsx';
import { useBgStyles } from '@components/auth/preSignUp/styles';
import { format } from 'date-fns';
import { concatStrings } from '@utils/common';
import { useFormikContext } from 'formik';
import { t } from 'ttag';
import { useStyles } from '../styles';
import { useBonusConfig } from '@contexts/bonusContext';

interface BirthDayBackgroundProps {
  canShowMessage: boolean;
}

const BirthDayBackground = forwardRef<any, BirthDayBackgroundProps>(
  ({ canShowMessage }, ref: RefObject<HTMLDivElement>) => {
    const { values } = useFormikContext<any>();
    const classes = useStyles();
    const bgClasses = useBgStyles();

    const isBirthday =
      format(new Date(), 'MM/dd') ===
      concatStrings(
        [
          (values.birthdate?.month.length === 1 ? '0' : '') + values.birthdate?.month,
          (values.birthdate?.day.length === 1 ? '0' : '') + values.birthdate?.day,
        ],
        '/',
      );
    const { bonusConfig } = useBonusConfig();

    return (
      <>
        <Portal container={ref.current}>
          <Fade in={isBirthday}>
            <span className={clsx(bgClasses.background, bgClasses.backgroundBirthday)} />
          </Fade>
          <Fade in={!isBirthday}>
            <span className={bgClasses.background} />
          </Fade>
        </Portal>
        <div className={classes.preText}>
          {canShowMessage && (
            <>
              <Collapse in={isBirthday} timeout={200}>
                <Text>{t`Happy Birthday!`}</Text>
              </Collapse>
              {t`Sign up and get`}{' '}
              <span>
                {bonusConfig.currency_sign}
                {bonusConfig.deposit_bonus_size}
              </span>{' '}
              <Text color="#E33355">{t`Deposit Bonus`}</Text>
            </>
          )}
        </div>
      </>
    );
  },
);

export default BirthDayBackground;
