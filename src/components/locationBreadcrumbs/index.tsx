import { t } from 'ttag';
import { Link as RouteLink, useLocation } from 'react-router-dom';
import { Breadcrumbs, Text, Link } from '@ui';
import { pathMap } from './utils';

// styles
import { useStyles } from './styles';

export const LocationBreadcrumbs = ({ path }) => {
  const classes = useStyles({});
  const { pathname } = useLocation();
  const pathnames = path || pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs className={classes.root}>
      <Link className={classes.link} component={RouteLink} to={'/'}>
        {t`Home`}
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Text key={to} className={classes.caption}>
            {pathMap[value] || value.replace('-', ' ', -1)}
          </Text>
        ) : (
          <Link className={classes.link} component={RouteLink} to={to} key={to}>
            {pathMap[value] || value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

LocationBreadcrumbs.defaultProps = {
  path: null,
};
