import clsx from 'clsx';
import { PageBody } from '@components/page';
import { LocationBreadcrumbs } from '@components/locationBreadcrumbs';
import { Text } from '@ui';

// styles
import { useStyles } from './styles';

export const PageHeader = ({ title, path, rootClassName, headerClassName }) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.root, rootClassName)}>
      <PageBody>
        <div className={clsx(classes.header, headerClassName)}>
          <div className={classes.headerContent}>
            {!!title && (
              <Text variant="h1" className={classes.title}>
                {title}
              </Text>
            )}
            <div className={classes.breadcrumbsHolder}>
              <LocationBreadcrumbs path={path} />
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};

PageHeader.defaultProps = {
  title: null,
  path: null,
  rootClassName: null,
  headerClassName: null,
};
