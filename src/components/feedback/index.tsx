import { t } from 'ttag';
import clsx from 'clsx';
import { Text } from '@ui';
import { NavLink } from 'react-router-dom';
import { TELEGRAM_SUPPORT_URL } from '@utils/constants';

// styles
import { useStyles } from './styles';

const BUTTONS = [
  {
    url: '',
    goto: 'contacts',
    icon: 'blogging',
    caption: t`Feedback or Report an issue`,
    text: t`Send us your feedback - we want to hear it! Or if you see any bug that we can fix!`,
  },
  {
    url: TELEGRAM_SUPPORT_URL,
    goto: '',
    icon: 'telegram',
    caption: t`Discuss on Telegram`,
    text: t`Join our team and the community on our Telegram chat channel.`,
  },
  {
    url: '',
    goto: 'faq',
    icon: 'support',
    caption: t`Get help`,
    text: t`Visit our help center or get in touch with our customer support team.`,
  },
];

export const Feedback = ({ label }) => {
  const classes = useStyles({});

  return (
    <>
      {!!label && (
        <Text variant="h4" align="center">
          {label}
        </Text>
      )}
      <div className={classes.buttonsHolder}>
        <ul className={classes.buttons}>
          {BUTTONS.map((item, index) => (
            <li key={index} className={classes.buttonsItem}>
              {!!item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className={classes.button}>
                  <span className={classes.buttonContent}>
                    <span className={clsx(classes.buttonIcon, 'glyph', `glyph-${item.icon}`)}></span>
                    <span className={classes.buttonCaption}>{item.caption}</span>
                    <span className={classes.buttonText}>{item.text}</span>
                  </span>
                </a>
              ) : (
                <NavLink to={item.goto} exact className={classes.button}>
                  <span className={classes.buttonContent}>
                    <span className={clsx(classes.buttonIcon, 'glyph', `glyph-${item.icon}`)}></span>
                    <span className={classes.buttonCaption}>{item.caption}</span>
                    <span className={classes.buttonText}>{item.text}</span>
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Feedback.defaultProps = {
  label: t`Let’s make Poker casta better, together`,
};
