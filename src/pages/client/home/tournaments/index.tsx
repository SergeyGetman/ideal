import { Winners } from './winners';
import { Announcements } from './announcements';

// styles
import { useStyles } from './styles';

export const TournamentsSection = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <div className={classes.winnersHolder}>
        <Winners />
      </div>
      <div className={classes.announcementsHolder}>
        <Announcements />
      </div>
    </div>
  );
};
