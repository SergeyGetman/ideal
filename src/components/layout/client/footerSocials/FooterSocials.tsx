import { t } from 'ttag';
import { useSocials } from '@hooks/useSocials';
import { Grid, SvgIcon } from '@ui';
import { useStyles } from './styles';

export const FooterSocials = () => {
  const classes = useStyles({});
  const { socials } = useSocials();

  return (
    <div>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <span className={classes.text}>{t`We are in social:`}</span>
        </Grid>
        {socials.map((item) => (
          <Grid item xs={2} sm={4} key={item.id} className={classes.socialsItem}>
            <a href={item.url} target="_blank" className={classes.socialsLink} rel="noreferrer">
              <span className={classes.iconHolder}>
                <SvgIcon glyph={item.icon} size={20} />
              </span>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
