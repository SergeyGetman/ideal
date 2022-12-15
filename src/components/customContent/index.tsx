// styles
import { useStyles } from './styles';

export const CustomContent = ({ children }) => {
  const classes = useStyles({});

  return <div className={classes.root}>{children}</div>;
};
