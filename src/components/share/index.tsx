import { t } from 'ttag';
import { Grid, SvgIcon } from '@ui';

// icons
import FacebookIcon from '@svg_icons/facebook.svg';
import TwitterIcon from '@svg_icons/twitter.svg';
import GooglePlusIcon from '@svg_icons/google-plus.svg';

// styles
import { useStyles } from './styles';

const SOCIALS = [
  {
    id: 'facebook',
    url: '#',
    icon: FacebookIcon,
    iconSize: 20,
  },
  {
    id: 'twitter',
    url: '#',
    icon: TwitterIcon,
    iconSize: 24,
  },
  {
    id: 'google-plus',
    url: '#',
    icon: GooglePlusIcon,
    iconSize: 30,
  },
];

export const Share = ({ label }) => {
  const classes = useStyles({});

  return (
    <Grid container spacing={4} alignItems="center">
      {!!label && (
        <Grid item>
          <span className={classes.text}>{label}</span>
        </Grid>
      )}
      <Grid item>
        <ul className={classes.socials}>
          {SOCIALS.map((item) => (
            <li key={item.id} className={classes.socialsItem}>
              <a href={item.url} target="_blank" className={classes.socialsLink} rel="noreferrer">
                <SvgIcon glyph={item.icon} size={item.iconSize} />
              </a>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

Share.defaultProps = {
  label: t`Share`,
};
