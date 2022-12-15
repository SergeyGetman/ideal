import { t } from 'ttag';
import { PageBody } from '@components/page';
import { useSocials } from '@hooks/useSocials';
import { Grid, SvgIcon } from '@ui';

// styles
import { useStyles } from './styles';

export const SocialLinksPanel = () => {
  const classes = useStyles({});
  const { socials } = useSocials();

  return (
    <div className={classes.root}>
      <PageBody>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item className={classes.socialLinksWrapper}>
            <div className={classes.socials}>
              <span className={classes.socialsDescription}>{t`We are in socials`}:</span>
              <ul className={classes.list}>
                {socials.map((item) => (
                  <li key={item.id} className={classes.item}>
                    <a href={item.url} className={classes.link} target="_blank" rel="noreferrer">
                      <span className={classes.iconHolder}>
                        <SvgIcon glyph={item.icon} size={'5vw'} />
                      </span>
                      {item.count && <span>{item.count}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </PageBody>
      <div className={classes.horizontalDivider}></div>
    </div>
  );
};
