// styles
import { useStyles } from './styles';

export const PageBody = ({ children }) => {
  const classes = useStyles({});

  return <div className={classes.page}>{children}</div>;
};
