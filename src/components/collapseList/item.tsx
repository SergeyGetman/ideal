import { useState } from 'react';
import clsx from 'clsx';
import { HighlightText } from '@components/highlightText';
import { Collapse, ButtonBase, SvgIcon } from '@ui';

// styles
import { useStyles } from './styles';

// icons
import PeakIcon from '@svg_icons/peak.svg';
import PlusIcon from '@svg_icons/plus.svg';
import MinusIcon from '@svg_icons/minus.svg';

export const CollapseItem = ({ searchValue, data, collapse }) => {
  const classes = useStyles({});
  const [collapsed, setCollapsed] = useState(collapse);

  return (
    <div className={clsx(collapsed && classes.collapsed)}>
      <ButtonBase className={classes.button} onClick={() => setCollapsed(!collapsed)}>
        <span className={classes.peak}>
          <SvgIcon size={14} glyph={PeakIcon} />
        </span>
        <span className={classes.caption}>
          <HighlightText searchValue={searchValue}>{data.title}</HighlightText>
        </span>
        <span className={classes.control}>
          <SvgIcon size={20} glyph={collapsed ? MinusIcon : PlusIcon} />
        </span>
      </ButtonBase>
      <Collapse in={collapsed} timeout={200}>
        <div className={classes.text}>{data.text}</div>
      </Collapse>
    </div>
  );
};

CollapseItem.defaultProps = {
  searchValue: null,
};
