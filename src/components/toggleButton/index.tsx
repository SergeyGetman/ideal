import { ButtonBase, Glyph } from '@ui';
import { t } from 'ttag';

import { useStyles } from './styles';
import clsx from 'clsx';

export const ToggleButton = ({ collapsed, handleToggleCollapse }) => {
  const classes = useStyles({});
  return (
    <div className={clsx(classes.toggleHolder, collapsed && classes.toggleHolderCollapsed)}>
      <div className={classes.buttonHolder}>
        <ButtonBase className={classes.toggleButton} onClick={handleToggleCollapse}>
          {collapsed ? (
            <span className={classes.buttonText}>
              <Glyph name="arrow-up" className={classes.buttonGlyph} />
              <span>{t`Hide`}</span>
              <Glyph name="arrow-up" className={classes.buttonGlyph} />
            </span>
          ) : (
            <span className={classes.buttonText}>
              <Glyph name="arrow-down" className={classes.buttonGlyph} />
              <span>{t`Show`}</span>
              <Glyph name="arrow-down" className={classes.buttonGlyph} />
            </span>
          )}
        </ButtonBase>
      </div>
    </div>
  );
};
