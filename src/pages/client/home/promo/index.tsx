import { useState } from 'react';
import { Advantages } from './advantages';
import { Table } from './table';
import { Collapse } from '@ui';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { breakpoints } from '@utils/styles';

// styles
import { useStyles } from './styles';
import { ToggleButton } from '@components/toggleButton';

export const PromoSection = () => {
  const classes = useStyles({});
  const [collapsed, setCollapsed] = useState(true);
  const isMobile = useMediaQuery(`(min-width:${breakpoints['md']}px)`);
  const isMobileSmall = useMediaQuery(`(min-width:${breakpoints['sm']}px)`);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={classes.root}>
      <div className={classes.gradient}>
        <div className={classes.flashBackground}>
          <div className={classes.symbolsBackground}>
            <div className={classes.content}>
              <Collapse in={collapsed} timeout="auto">
                <Table isMobile={isMobile} />
                <div className={classes.advantagesHolder}>
                  <Advantages isMobileSmall={isMobileSmall} />
                </div>
              </Collapse>
              <ToggleButton collapsed={collapsed} handleToggleCollapse={handleToggleCollapse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
