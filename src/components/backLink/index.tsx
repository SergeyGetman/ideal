import { Link as RouteLink } from 'react-router-dom';
import { Link, SvgIcon } from '@ui';

// styles
import { useStyles } from './styles';

// icons
import LeftIcon from '@svg_icons/left.svg';

export const BackLink = ({ label, to }) => {
  const classes = useStyles({});

  return (
    <Link color="secondary" component={RouteLink} className={classes.root} to={to}>
      <SvgIcon glyph={LeftIcon} className={classes.icon} />
      <span>{label}</span>
    </Link>
  );
};
