import { PageBody } from '@components/page';

// styles
import { useStyles } from './styles';

export const StreamsWatch = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <PageBody>StreamsWatch</PageBody>
    </div>
  );
};
