import { t } from 'ttag';
import { useAuthContext } from '@contexts/authContext';
import { thousandSeparator } from '@utils/common';
import { LogoutButton } from '@components/logoutButton';
import { Grid, Avatar } from '@ui';

// styles
import { useStyles } from './styles';

export const CurrentUser = () => {
  const classes = useStyles({});
  const { user } = useAuthContext();

  const caption = user?.name;

  if (!user) {
    return null;
  }

  return (
    <Grid container spacing={3} alignItems="center" className={classes.root}>
      <Grid item>
        <Avatar src={user.avatar} alt={caption}>
          {caption.charAt(0).toUpperCase()}
        </Avatar>
      </Grid>
      <Grid item xs>
        <span className={classes.name}>{caption}</span>
        <span className={classes.balance}>
          {t`Balance:`} <b>${user.balance ? thousandSeparator(user.balance) : 0}</b>
        </span>
      </Grid>
      <Grid item className={classes.logoutHolder}>
        <LogoutButton />
      </Grid>
    </Grid>
  );
};
