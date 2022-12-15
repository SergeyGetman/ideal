import { useStyles } from '../../styles';
import { Grid, SvgIcon } from '@ui';
import { useSocials } from '@hooks/useSocials';
import { t } from 'ttag';

export const SocialsLinksSection = () => {
  const classes = useStyles({});
  const { socials } = useSocials();
  return (
    <Grid item className={classes.socialLinksWrapper}>
      <div className={classes.socials}>
        <span>{t`Follow us`}:</span>
        <ul className={classes.list}>
          {socials.map((item) => (
            <li key={item.id} className={classes.item}>
              <a href={item.url} className={classes.link} target="_blank" rel="noreferrer">
                <span className={classes.iconHolder}>
                  <SvgIcon glyph={item.icon} size={20} />
                </span>
                {item.count && <span>{item.count}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Grid>
  );
};
